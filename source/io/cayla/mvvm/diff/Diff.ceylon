
"""Diff two series of elements
   """
shared class Diff<E>(
    List<E> elements1,
    List<E> elements2) satisfies Iterator<[E,Change]> given E satisfies Object {

    value m = elements1.size;
    value n = elements2.size;

    class Matrix(Integer width, Integer height) {
        
        value state = arrayOfSize(width * height, 0);
        
        shared void set(Integer x, Integer y, Integer e) {
            state.set(x + y * (m + 1), e);
        }
        
        shared Integer get(Integer x, Integer y) {
            assert(exists e = state[x + y * (m + 1)]);
            return e;
        }
        
        shared actual String string => state.string;
    }

    //
    value opt = Matrix(elements1.size + 1, elements2.size + 1);
    if (m > 0 && n > 0) {
        for (i in m-1..0) {
            for (j in n-1..0) {
                assert(exists x = elements1[i]);
                assert(exists y = elements2[j]);
                opt.set(i, j, x == y then opt.get(i+1, j+1) + 1 else max({opt.get(i+1, j), opt.get(i, j+1)}));
            }
        }
    }
    
    variable Integer i = 0;
    variable Integer j = 0;
    
    shared actual [E,Change]|Finished next() {
        if (i < m && j < n) {
            assert(exists e1 = elements1[i]); 
            assert(exists e2 = elements2[j]); 
            if (e1 == e2) {
                i++;
                j++;
                return [e1,same];
            } else if (opt.get(i + 1, j) >= opt.get(i, j + 1)) {
                i++;
                return [e1,removed];
            } else {
                j++;
                return [e2,added];
            }
        } else if (i < m) {
            assert(exists e1 = elements1[i]);
            i++; 
            return [e1,removed];
        } else if (j < n) {
            assert(exists e2 = elements2[j]);
            j++; 
            return [e2,added];
        } else {
            return finished;
        }
    }
}

