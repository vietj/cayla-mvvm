(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0"],"$mod-name":"ceylon.collection","$mod-version":"1.0.0","$mod-bin":"6.0","ceylon.collection":{"Cell":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$nm":"T"},"$mt":"prm","$nm":"_car"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$mt":"prm","$nm":"_cdr"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$at":{"car":{"$t":{"$nm":"T"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"car"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"_cdr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$mt":"attr","$nm":"_cdr"},"cdr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"cdr"},"_car":{"$t":{"$nm":"T"},"$mt":"attr","$nm":"_car"}},"$nm":"Cell"},"MutableSet":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Set"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"see":["MutableList","MutableMap"],"doc":["A [[Set]] supporting addition of new elements and removal of \nexisting elements."],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every element from this set, leaving an empty set."]},"$nm":"clear"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given elements to this set, returning true if any \nof the given elements was not already element a member of\nthe set."]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove an element from this set, returning true if the\nelement was previously a member of the set."]},"$nm":"remove"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add an element to this set, returning true if the element\nwas already a member of the set, or false otherwise."]},"$nm":"add"}},"$nm":"MutableSet"},"CellIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$hdn":"1","$mt":"prm","$an":{"variable":[]},"$nm":"iter"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"T"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"iter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"iter"}},"$nm":"CellIterator"},"HashMap":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"initialValues"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.collection","$nm":"MutableMap"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["A [[MutableMap]] implemented as a hash map stored in an [[Array]]\nof singly linked lists of entries. The hash code of a key is \ndefined by [[Object.hash]]."],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every key\/value mapping"],"actual":[]},"$nm":"clear"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"put"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes a key\/value mapping if it exists"],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"},{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$nm":"addToStore"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a collection of key\/value mappings to this map, may be used to change existing mappings"],"actual":[]},"$nm":"putAll"}},"$at":{"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"initialValues":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"initialValues"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"values"},"inverse":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"inverse"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashMap"},"$pkg-shared":"1","MutableList":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"}],"$mt":"ifc","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"see":["MutableMap","MutableSet"],"doc":["A [[List]] supporting addition, insertion, removal, and \nmutation of its elements."],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every item from this list, leaving an empty list."]},"$nm":"clear"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove all occurrences of the given value from this\nlist."]},"$nm":"removeElement"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given items to the end of this list."]},"$nm":"addAll"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove the item at the specified index, returning the\nremoved item, or null if there was no such item."]},"$nm":"remove"},"removeLast":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Remove the item with index `size-1` from this list, \nreturning the removed item, or null if there was no such \nitem."]},"$nm":"removeLast"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Set the item at the given index in this list. The list \nis expanded if `index > size`."]},"$nm":"set"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Insert the given item at the specified index. The list \nis expanded if `index > size`."]},"$nm":"insert"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given item to the end of this list."]},"$nm":"add"},"removeFirst":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Remove the item with index `0` from this list, returning \nthe removed item, or null if there was no such item."]},"$nm":"removeFirst"}},"$nm":"MutableList"},"LinkedList":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableList"}],"$mt":"cls","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["A [[MutableList]] implemented as a singly linked list."],"by":["Stéphane Épardaud"]},"$m":{"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes the item at the specified index"],"actual":[]},"$nm":"remove"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"segment":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Sets an item at the given index. List is expanded if index > size"],"actual":[]},"$nm":"set"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds an item at the end of this list"],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Remove every item"],"actual":[]},"$nm":"clear"},"_add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"_add"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"removeElement"},"defines":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"defines"},"spanTo":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Inserts an item at specified index, list is expanded if index > size"],"actual":[]},"$nm":"insert"},"spanFrom":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"span":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"rest":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"reversed":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"head":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"head"},"tail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"tail"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"LinkedList"},"makeCellEntryArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"size"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$nm":"makeCellEntryArray"},"group":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Group"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.collection","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"},{"$t":{"$nm":"Group"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["A function that returns the key under which to group the \nspecified element."]},"$nm":"grouping"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Group"},{"$nm":"Element"}],"$an":{"shared":[],"doc":["Creates a `Map` that contains the `Iterable`'s\n    elements, grouped in `Sequence`s under the\n    keys provided by the grouping function."]},"$m":{"grouping":{"$t":{"$nm":"Group"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"doc":["A function that returns the key under which to group the \nspecified element."]},"$nm":"grouping"},"fn":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":{"$nm":"Group"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$nm":"fn"}},"$nm":"group"},"makeCellElementArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"size"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$nm":"makeCellElementArray"},"MutableMap":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"see":["MutableList","MutableSet"],"doc":["A [[Map]] supporting addition of new entries and removal of\nexisting entries."],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every entry from this map, leaving an empty map."]},"$nm":"clear"},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add an entry to this map, overwriting any existing entry for \nthe given `key`, and returning the previous value associated \nwith the given `key`, if any, or null."]},"$nm":"put"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove the entry associated with the given `key`, if any, from \nthis map, returning the value no longer associated with the \ngiven `key`, if any, or null."]},"$nm":"remove"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given entries to this map, overwriting any existing\nentries with the same keys."]},"$nm":"putAll"}},"$nm":"MutableMap"},"eq":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"mthd","$nm":"eq"},"HashSet":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableSet"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["A [[MutableSet]] implemented as a hash set stored in an [[Array]]\nof singly linked lists. The hash code of an element is defined\nby [[Object.hash]]."],"by":["Stéphane Épardaud"]},"$m":{"intersection":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"intersection"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every element"],"actual":[]},"$nm":"clear"},"complement":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"complement"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"elem"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"exclusiveUnion":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"exclusiveUnion"},"union":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"union"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"addToStore"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashSet"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
function MutableMap($$targs$$,$$mutableMap){
    $$$cl1.Map($$mutableMap.$$targs$$===undefined?$$targs$$:{Key:$$mutableMap.$$targs$$.Key,Item:$$mutableMap.$$targs$$.Item},$$mutableMap);
    $$$cl1.set_type_args($$mutableMap,$$targs$$);
}
MutableMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:$$$cl1.Map,a:{Key:'Key',Item:'Item'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[Map]] supporting addition of new entries and removal of\nexisting entries.",77)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.collection','1.0.0').findPackage('ceylon.collection'),MutableList),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.collection','1.0.0').findPackage('ceylon.collection'),MutableSet)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','MutableMap']};};
exports.MutableMap=MutableMap;
function $init$MutableMap(){
    if (MutableMap.$$===undefined){
        $$$cl1.initTypeProtoI(MutableMap,'ceylon.collection::MutableMap',$$$cl1.Map);
        (function($$mutableMap){
            $$mutableMap.put={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:'Item',$an:function(){return[];}}],$cont:MutableMap,$an:function(){return[$$$cl1.doc("Add an entry to this map, overwriting any existing entry for \nthe given `key`, and returning the previous value associated \nwith the given `key`, if any, or null."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableMap','$m','put']};}};$$mutableMap.putAll={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$an:function(){return[];}}],$cont:MutableMap,$an:function(){return[$$$cl1.doc("Add the given entries to this map, overwriting any existing\nentries with the same keys."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableMap','$m','putAll']};}};$$mutableMap.remove={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}}],$cont:MutableMap,$an:function(){return[$$$cl1.doc("Remove the entry associated with the given `key`, if any, from \nthis map, returning the value no longer associated with the \ngiven `key`, if any, or null."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableMap','$m','remove']};}};$$mutableMap.clear={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:MutableMap,$an:function(){return[$$$cl1.doc("Remove every entry from this map, leaving an empty map."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableMap','$m','clear']};}};
        })(MutableMap.$$.prototype);
    }
    return MutableMap;
}
exports.$init$MutableMap=$init$MutableMap;
$init$MutableMap();
function LinkedList(values$379, $$targs$$,$$linkedList){
    $init$LinkedList();
    if ($$linkedList===undefined)$$linkedList=new LinkedList.$$;
    $$$cl1.set_type_args($$linkedList,$$targs$$);
    if(values$379===undefined){values$379=$$$cl1.getEmpty();}
    $$linkedList.values$379_=values$379;
    MutableList($$linkedList.$$targs$$===undefined?$$targs$$:{Element:$$linkedList.$$targs$$.Element},$$linkedList);
    $$linkedList.head$380_=null;
    $$linkedList.$prop$getHead$380={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','head']};}};
    $$linkedList.$prop$getHead$380.get=function(){return head$380};
    $$linkedList.tail$381_=null;
    $$linkedList.$prop$getTail$381={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','tail']};}};
    $$linkedList.$prop$getTail$381.get=function(){return tail$381};
    $$linkedList._size$382_=(0);
    $$linkedList.$prop$get_size$382={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','_size']};}};
    $$linkedList.$prop$get_size$382.get=function(){return _size$382};
    var it$383 = $$linkedList.values$379.iterator();
    var val$384;while ((val$384=it$383.next())!==$$$cl1.getFinished()){
        $$linkedList._add$385(val$384);
    }
    return $$linkedList;
}
LinkedList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'values',$mt:'prm',$def:1,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$tp:{Element:{}},satisfies:[{t:MutableList,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[MutableList]] implemented as a singly linked list.",54)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','LinkedList']};};
exports.LinkedList=LinkedList;
function $init$LinkedList(){
    if (LinkedList.$$===undefined){
        $$$cl1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',$$$cl1.Basic,$init$MutableList());
        (function($$linkedList){
            $$$cl1.defineAttr($$linkedList,'head$380',function(){return this.head$380_;},function(head$386){return this.head$380_=head$386;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','head']};});
            $$$cl1.defineAttr($$linkedList,'tail$381',function(){return this.tail$381_;},function(tail$387){return this.tail$381_=tail$387;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','tail']};});
            $$$cl1.defineAttr($$linkedList,'_size$382',function(){return this._size$382_;},function(_size$388){return this._size$382_=_size$388;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','_size']};});
            $$linkedList._add$385=function _add$385(val$389){
                var $$linkedList=this;
                var newTail$390=Cell(val$389,null,{T:$$linkedList.$$targs$$.Element});
                var tail$391;
                if((tail$391=$$linkedList.tail$381)!==null){
                    (tail$391.cdr=newTail$390);
                    ($$linkedList.tail$381=newTail$390);
                }else {
                    $$linkedList.tail$381=($$linkedList.head$380=newTail$390);
                }
                (old_size$392=$$linkedList._size$382,$$linkedList._size$382=old_size$392.successor,old_size$392);
                var old_size$392;
            };$$linkedList._add$385.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','_add']};};
            $$linkedList.set=function set(index$393,val$394){
                var $$linkedList=this;
                if(index$393.compare($$linkedList._size$382).equals($$$cl1.getSmaller())){
                    var iter$395=$$linkedList.head$380;
                    function setIter$395(iter$396){return iter$395=iter$396;};
                    $prop$getIter$395={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','iter']};}};
                    $prop$getIter$395.get=function(){return iter$395};
                    $prop$getIter$395.set=setIter$395;
                    if (setIter$395.$$metamodel$$===undefined)setIter$395.$$metamodel$$=$prop$getIter$395.$$metamodel$$;
                    var i$397=(0);
                    function setI$397(i$398){return i$397=i$398;};
                    $prop$getI$397={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','i']};}};
                    $prop$getI$397.get=function(){return i$397};
                    $prop$getI$397.set=setI$397;
                    if (setI$397.$$metamodel$$===undefined)setI$397.$$metamodel$$=$prop$getI$397.$$metamodel$$;
                    var cell$399;
                    while((cell$399=iter$395)!==null){
                        if((oldi$400=i$397,i$397=oldi$400.successor,oldi$400).equals(index$393)){
                            (cell$399.car=val$394);
                            return;
                        }
                        var oldi$400;
                        iter$395=cell$399.cdr;
                    }
                }else {
                    var need$401=index$393.minus($$linkedList._size$382);
                    function setNeed$401(need$402){return need$401=need$402;};
                    $prop$getNeed$401={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','need']};}};
                    $prop$getNeed$401.get=function(){return need$401};
                    $prop$getNeed$401.set=setNeed$401;
                    if (setNeed$401.$$metamodel$$===undefined)setNeed$401.$$metamodel$$=$prop$getNeed$401.$$metamodel$$;
                    var newTail$403=Cell(val$394,null,{T:$$linkedList.$$targs$$.Element});
                    $prop$getNewTail$403={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},d:['ceylon.collection','LinkedList','$m','set','$at','newTail']};}};
                    $prop$getNewTail$403.get=function(){return newTail$403};
                    var newHead$404=newTail$403;
                    function setNewHead$404(newHead$405){return newHead$404=newHead$405;};
                    $prop$getNewHead$404={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','newHead']};}};
                    $prop$getNewHead$404.get=function(){return newHead$404};
                    $prop$getNewHead$404.set=setNewHead$404;
                    if (setNewHead$404.$$metamodel$$===undefined)setNewHead$404.$$metamodel$$=$prop$getNewHead$404.$$metamodel$$;
                    while((oldneed$406=need$401,need$401=oldneed$406.predecessor,oldneed$406).compare((0)).equals($$$cl1.getLarger())){
                        newHead$404=Cell(val$394,newHead$404,{T:$$linkedList.$$targs$$.Element});
                    }
                    var oldneed$406;
                    var tail$407;
                    if((tail$407=$$linkedList.tail$381)!==null){
                        (tail$407.cdr=newHead$404);
                    }else {
                        $$linkedList.head$380=newHead$404;
                    }
                    $$linkedList.tail$381=newTail$403;
                    $$linkedList._size$382=index$393.plus((1));
                }
            };$$linkedList.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Sets an item at the given index. List is expanded if index > size",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','set']};};
            $$linkedList.insert=function insert(index$408,val$409){
                var $$linkedList=this;
                if((index$408.compare($$linkedList._size$382)!==$$$cl1.getSmaller())){
                    $$linkedList.set(index$408,val$409);
                }else {
                    var newCell$410=Cell(val$409,null,{T:$$linkedList.$$targs$$.Element});
                    $prop$getNewCell$410={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},d:['ceylon.collection','LinkedList','$m','insert','$at','newCell']};}};
                    $prop$getNewCell$410.get=function(){return newCell$410};
                    if(index$408.equals((0))){
                        (newCell$410.cdr=$$linkedList.head$380);
                        $$linkedList.head$380=newCell$410;
                    }else {
                        var iter$411=$$linkedList.head$380;
                        function setIter$411(iter$412){return iter$411=iter$412;};
                        $prop$getIter$411={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','iter']};}};
                        $prop$getIter$411.get=function(){return iter$411};
                        $prop$getIter$411.set=setIter$411;
                        if (setIter$411.$$metamodel$$===undefined)setIter$411.$$metamodel$$=$prop$getIter$411.$$metamodel$$;
                        var prev$413=null;
                        function setPrev$413(prev$414){return prev$413=prev$414;};
                        $prop$getPrev$413={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','prev']};}};
                        $prop$getPrev$413.get=function(){return prev$413};
                        $prop$getPrev$413.set=setPrev$413;
                        if (setPrev$413.$$metamodel$$===undefined)setPrev$413.$$metamodel$$=$prop$getPrev$413.$$metamodel$$;
                        var i$415=(0);
                        function setI$415(i$416){return i$415=i$416;};
                        $prop$getI$415={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','i']};}};
                        $prop$getI$415.get=function(){return i$415};
                        $prop$getI$415.set=setI$415;
                        if (setI$415.$$metamodel$$===undefined)setI$415.$$metamodel$$=$prop$getI$415.$$metamodel$$;
                        var cell$417;
                        while((cell$417=iter$411)!==null){
                            if((oldi$418=i$415,i$415=oldi$418.successor,oldi$418).equals(index$408)){
                                var prev2$419;
                                if((prev2$419=prev$413)!==null){
                                    (prev2$419.cdr=newCell$410);
                                    (newCell$410.cdr=cell$417);
                                }else {}
                                break;
                            }
                            var oldi$418;
                            prev$413=iter$411;
                            iter$411=cell$417.cdr;
                        }
                    }
                    (old_size$420=$$linkedList._size$382,$$linkedList._size$382=old_size$420.successor,old_size$420);
                    var old_size$420;
                }
            };$$linkedList.insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Inserts an item at specified index, list is expanded if index > size",68)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','insert']};};
            $$linkedList.add=function add(val$421){
                var $$linkedList=this;
                $$linkedList._add$385(val$421);
            };$$linkedList.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds an item at the end of this list",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','add']};};
            $$linkedList.addAll=function addAll(values$422){
                var $$linkedList=this;
                var it$423 = values$422.iterator();
                var val$424;while ((val$424=it$423.next())!==$$$cl1.getFinished()){
                    $$linkedList.add(val$424);
                }
            };$$linkedList.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','addAll']};};
            $$linkedList.remove=function remove(index$425){
                var $$linkedList=this;
                if(index$425.compare($$linkedList._size$382).equals($$$cl1.getSmaller())){
                    var iter$426=$$linkedList.head$380;
                    function setIter$426(iter$427){return iter$426=iter$427;};
                    $prop$getIter$426={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','iter']};}};
                    $prop$getIter$426.get=function(){return iter$426};
                    $prop$getIter$426.set=setIter$426;
                    if (setIter$426.$$metamodel$$===undefined)setIter$426.$$metamodel$$=$prop$getIter$426.$$metamodel$$;
                    var prev$428=null;
                    function setPrev$428(prev$429){return prev$428=prev$429;};
                    $prop$getPrev$428={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','prev']};}};
                    $prop$getPrev$428.get=function(){return prev$428};
                    $prop$getPrev$428.set=setPrev$428;
                    if (setPrev$428.$$metamodel$$===undefined)setPrev$428.$$metamodel$$=$prop$getPrev$428.$$metamodel$$;
                    var i$430=(0);
                    function setI$430(i$431){return i$430=i$431;};
                    $prop$getI$430={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','i']};}};
                    $prop$getI$430.get=function(){return i$430};
                    $prop$getI$430.set=setI$430;
                    if (setI$430.$$metamodel$$===undefined)setI$430.$$metamodel$$=$prop$getI$430.$$metamodel$$;
                    var cell$432;
                    while((cell$432=iter$426)!==null){
                        if((oldi$433=i$430,i$430=oldi$433.successor,oldi$433).equals(index$425)){
                            var prev2$434;
                            if((prev2$434=prev$428)!==null){
                                (prev2$434.cdr=cell$432.cdr);
                            }else {
                                $$linkedList.head$380=cell$432.cdr;
                            }
                            if((!$$$cl1.exists(cell$432.cdr))){
                                $$linkedList.tail$381=prev$428;
                            }
                            (old_size$435=$$linkedList._size$382,$$linkedList._size$382=old_size$435.predecessor,old_size$435);
                            var old_size$435;
                            return cell$432.car;
                        }
                        var oldi$433;
                        prev$428=iter$426;
                        iter$426=cell$432.cdr;
                    }
                    //assert at LinkedList.ceylon (135:12-135:26)
                    if (!(false)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'false\' at LinkedList.ceylon (135:19-135:25)"),'135:12-135:26','LinkedList.ceylon'); }
                }else {
                    return null;
                }
            };$$linkedList.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes the item at the specified index",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','remove']};};
            $$linkedList.removeElement=function removeElement(val$436){
                var $$linkedList=this;
                var iter$437=$$linkedList.head$380;
                function setIter$437(iter$438){return iter$437=iter$438;};
                var prev$439=null;
                function setPrev$439(prev$440){return prev$439=prev$440;};
                var cell$441;
                while((cell$441=iter$437)!==null){
                    if(eq(cell$441.car,val$436)){
                        var prev2$442;
                        if((prev2$442=prev$439)!==null){
                            (prev2$442.cdr=cell$441.cdr);
                        }else {
                            $$linkedList.head$380=cell$441.cdr;
                        }
                        if((!$$$cl1.exists(cell$441.cdr))){
                            $$linkedList.tail$381=prev$439;
                        }
                        (old_size$443=$$linkedList._size$382,$$linkedList._size$382=old_size$443.predecessor,old_size$443);
                        var old_size$443;
                        iter$437=cell$441.cdr;
                    }else {
                        prev$439=iter$437;
                        iter$437=cell$441.cdr;
                    }
                }
            };$$linkedList.removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','removeElement']};};
            $$linkedList.clear=function clear(){
                var $$linkedList=this;
                $$linkedList._size$382=(0);
                $$linkedList.head$380=($$linkedList.tail$381=null);
            };$$linkedList.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Remove every item",17)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','clear']};};
            $$linkedList.$get=function $get(index$444){
                var $$linkedList=this;
                var iter$445=$$linkedList.head$380;
                function setIter$445(iter$446){return iter$445=iter$446;};
                var i$447=(0);
                function setI$447(i$448){return i$447=i$448;};
                var cell$449;
                while((cell$449=iter$445)!==null){
                    if((oldi$450=i$447,i$447=oldi$450.successor,oldi$450).equals(index$444)){
                        return cell$449.car;
                    }
                    var oldi$450;
                    iter$445=cell$449.cdr;
                }
                return null;
            };$$linkedList.$get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','get']};};
            $$linkedList.span=function span(from$451,to$452){
                var $$linkedList=this;
                var ret$453=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                var iter$454=$$linkedList.head$380;
                function setIter$454(iter$455){return iter$454=iter$455;};
                var i$456=(0);
                function setI$456(i$457){return i$456=i$457;};
                var cell$458;
                while((cell$458=iter$454)!==null){
                    if(i$456.compare(to$452).equals($$$cl1.getLarger())){
                        break;
                    }
                    if((i$456.compare(from$451)!==$$$cl1.getSmaller())){
                        ret$453.add(cell$458.car);
                    }
                    (oldi$459=i$456,i$456=oldi$459.successor,oldi$459);
                    var oldi$459;
                    iter$454=cell$458.cdr;
                }
                return ret$453;
            };$$linkedList.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','span']};};
            $$linkedList.spanFrom=function spanFrom(from$460){
                var $$linkedList=this;
                var ret$461=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                var iter$462=$$linkedList.head$380;
                function setIter$462(iter$463){return iter$462=iter$463;};
                var i$464=(0);
                function setI$464(i$465){return i$464=i$465;};
                var cell$466;
                while((cell$466=iter$462)!==null){
                    if((i$464.compare(from$460)!==$$$cl1.getSmaller())){
                        ret$461.add(cell$466.car);
                    }
                    (oldi$467=i$464,i$464=oldi$467.successor,oldi$467);
                    var oldi$467;
                    iter$462=cell$466.cdr;
                }
                return ret$461;
            };$$linkedList.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','spanFrom']};};
            $$linkedList.spanTo=function spanTo(to$468){
                var $$linkedList=this;
                var ret$469=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                var iter$470=$$linkedList.head$380;
                function setIter$470(iter$471){return iter$470=iter$471;};
                var i$472=(0);
                function setI$472(i$473){return i$472=i$473;};
                var cell$474;
                while((cell$474=iter$470)!==null){
                    if(i$472.compare(to$468).equals($$$cl1.getLarger())){
                        break;
                    }
                    ret$469.add(cell$474.car);
                    (oldi$475=i$472,i$472=oldi$475.successor,oldi$475);
                    var oldi$475;
                    iter$470=cell$474.cdr;
                }
                return ret$469;
            };$$linkedList.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','spanTo']};};
            $$linkedList.segment=function segment(from$476,length$477){
                var $$linkedList=this;
                var ret$478=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                if(length$477.equals((0))){
                    return ret$478;
                }
                var iter$479=$$linkedList.head$380;
                function setIter$479(iter$480){return iter$479=iter$480;};
                var i$481=(0);
                function setI$481(i$482){return i$481=i$482;};
                var cell$483;
                while((cell$483=iter$479)!==null){
                    if((i$481.compare(from$476)!==$$$cl1.getSmaller())){
                        if((ret$478._size$382.compare(length$477)!==$$$cl1.getSmaller())){
                            break;
                        }
                        ret$478.add(cell$483.car);
                    }
                    (oldi$484=i$481,i$481=oldi$484.successor,oldi$484);
                    var oldi$484;
                    iter$479=cell$483.cdr;
                }
                return ret$478;
            };$$linkedList.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','segment']};};
            $$linkedList.defines=function defines(index$485){
                var $$linkedList=this;
                return ((index$485.compare((0))!==$$$cl1.getSmaller())&&index$485.compare($$linkedList._size$382).equals($$$cl1.getSmaller()));
            };$$linkedList.defines.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','defines']};};
            $$linkedList.contains=function contains(element$486){
                var $$linkedList=this;
                var iter$487=$$linkedList.head$380;
                function setIter$487(iter$488){return iter$487=iter$488;};
                var cell$489;
                while((cell$489=iter$487)!==null){
                    var elem$490;
                    if($$$cl1.isOfType((elem$490=cell$489.car),{t:$$$cl1.Object})){
                        if(elem$490.equals(element$486)){
                            return true;
                        }
                    }
                    iter$487=cell$489.cdr;
                }
                return false;
            };$$linkedList.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','contains']};};
            $$$cl1.defineAttr($$linkedList,'size',function(){
                var $$linkedList=this;
                return $$linkedList._size$382;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','size']};});$$linkedList.count=function count(selecting$491){
                var $$linkedList=this;
                var iter$492=$$linkedList.head$380;
                function setIter$492(iter$493){return iter$492=iter$493;};
                var c$494=(0);
                function setC$494(c$495){return c$494=c$495;};
                var cell$496;
                while((cell$496=iter$492)!==null){
                    if(selecting$491(cell$496.car)){
                        (oldc$497=c$494,c$494=oldc$497.successor,oldc$497);
                        var oldc$497;
                    }
                    iter$492=cell$496.cdr;
                }
                return c$494;
            };$$linkedList.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','count']};};
            $$$cl1.defineAttr($$linkedList,'lastIndex',function(){
                var $$linkedList=this;
                return ((!$$linkedList.empty)?$$linkedList._size$382.minus((1)):null);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','lastIndex']};});$$linkedList.iterator=function iterator(){
                var $$linkedList=this;
                return CellIterator($$linkedList.head$380,{T:$$linkedList.$$targs$$.Element});
            };$$linkedList.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','iterator']};};
            $$$cl1.defineAttr($$linkedList,'clone',function(){
                var $$linkedList=this;
                var ret$498=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                $prop$getRet$498={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','clone','$at','ret']};}};
                $prop$getRet$498.get=function(){return ret$498};
                (ret$498.head$380=$$linkedList.head$380);
                (ret$498.tail$381=$$linkedList.tail$381);
                (ret$498._size$382=$$linkedList.size);
                return ret$498;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','clone']};});$$$cl1.defineAttr($$linkedList,'keys',function(){
                var $$linkedList=this;
                return (opt$499=($$linkedList.empty?$$$cl1.getEmpty():null),opt$499!==null?opt$499:$$$cl1.Range((0),$$linkedList._size$382,{Element:{t:$$$cl1.Integer}}));
                var opt$499;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Integer}}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','keys']};});$$$cl1.defineAttr($$linkedList,'string',function(){
                var $$linkedList=this;
                var b$500=$$$cl1.StringBuilder();
                $prop$getB$500={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','LinkedList','$at','string','$at','b']};}};
                $prop$getB$500.get=function(){return b$500};
                b$500.append($$$cl1.String("[",1));
                var iter$501=$$linkedList.head$380;
                function setIter$501(iter$502){return iter$501=iter$502;};
                $prop$getIter$501={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','string','$at','iter']};}};
                $prop$getIter$501.get=function(){return iter$501};
                $prop$getIter$501.set=setIter$501;
                if (setIter$501.$$metamodel$$===undefined)setIter$501.$$metamodel$$=$prop$getIter$501.$$metamodel$$;
                var cell$503;
                while((cell$503=iter$501)!==null){
                    var car$504;
                    if($$$cl1.isOfType((car$504=cell$503.car),{t:$$$cl1.Object})){
                        b$500.append(car$504.string);
                    }else {
                        b$500.append($$$cl1.String("null",4));
                    }
                    iter$501=cell$503.cdr;
                    if($$$cl1.exists(iter$501)){
                        b$500.append($$$cl1.String(", ",2));
                    }
                }
                b$500.append($$$cl1.String("]",1));
                return b$500.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','string']};});$$$cl1.defineAttr($$linkedList,'hash',function(){
                var $$linkedList=this;
                var h$505=(17);
                function setH$505(h$506){return h$505=h$506;};
                $prop$getH$505={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','hash','$at','h']};}};
                $prop$getH$505.get=function(){return h$505};
                $prop$getH$505.set=setH$505;
                if (setH$505.$$metamodel$$===undefined)setH$505.$$metamodel$$=$prop$getH$505.$$metamodel$$;
                var iter$507=$$linkedList.head$380;
                function setIter$507(iter$508){return iter$507=iter$508;};
                $prop$getIter$507={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','hash','$at','iter']};}};
                $prop$getIter$507.get=function(){return iter$507};
                $prop$getIter$507.set=setIter$507;
                if (setIter$507.$$metamodel$$===undefined)setIter$507.$$metamodel$$=$prop$getIter$507.$$metamodel$$;
                var cell$509;
                while((cell$509=iter$507)!==null){
                    var car$510;
                    if($$$cl1.isOfType((car$510=cell$509.car),{t:$$$cl1.Object})){
                        h$505=h$505.times((31)).plus(car$510.hash);
                    }else {
                        h$505=h$505.times((31));
                    }
                    iter$507=cell$509.cdr;
                }
                return h$505;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','hash']};});$$linkedList.equals=function equals(that$511){
                var $$linkedList=this;
                var that$512;
                if($$$cl1.isOfType((that$512=that$511),{t:$$$cl1.List,a:{Element:{t:$$$cl1.Object}}})&&$$linkedList._size$382.equals(that$512.size)){
                    var iter$513=$$linkedList.head$380;
                    function setIter$513(iter$514){return iter$513=iter$514;};
                    $prop$getIter$513={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','equals','$at','iter']};}};
                    $prop$getIter$513.get=function(){return iter$513};
                    $prop$getIter$513.set=setIter$513;
                    if (setIter$513.$$metamodel$$===undefined)setIter$513.$$metamodel$$=$prop$getIter$513.$$metamodel$$;
                    var iter2$515=that$512.iterator();
                    function setIter2$515(iter2$516){return iter2$515=iter2$516;};
                    $prop$getIter2$515={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Object}}},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','equals','$at','iter2']};}};
                    $prop$getIter2$515.get=function(){return iter2$515};
                    $prop$getIter2$515.set=setIter2$515;
                    if (setIter2$515.$$metamodel$$===undefined)setIter2$515.$$metamodel$$=$prop$getIter2$515.$$metamodel$$;
                    var cell$517;
                    while((cell$517=iter$513)!==null){
                        var thatElement$518;
                        if(!$$$cl1.isOfType((thatElement$518=iter2$515.next()),{t:$$$cl1.Finished})){
                            if((!eq(cell$517.car,thatElement$518))){
                                return false;
                            }
                            iter$513=cell$517.cdr;
                        }else {
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            };$$linkedList.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','equals']};};
            $$$cl1.defineAttr($$linkedList,'reversed',function(){
                var $$linkedList=this;
                var ret$519=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                $prop$getRet$519={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','reversed','$at','ret']};}};
                $prop$getRet$519.get=function(){return ret$519};
                var iter$520=$$linkedList.head$380;
                function setIter$520(iter$521){return iter$520=iter$521;};
                $prop$getIter$520={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','reversed','$at','iter']};}};
                $prop$getIter$520.get=function(){return iter$520};
                $prop$getIter$520.set=setIter$520;
                if (setIter$520.$$metamodel$$===undefined)setIter$520.$$metamodel$$=$prop$getIter$520.$$metamodel$$;
                var cell$522;
                while((cell$522=iter$520)!==null){
                    (ret$519.head$380=Cell(cell$522.car,ret$519.head$380,{T:$$linkedList.$$targs$$.Element}));
                    if((!$$$cl1.exists(ret$519.tail$381))){
                        (ret$519.tail$381=ret$519.head$380);
                    }
                    iter$520=cell$522.cdr;
                }
                (ret$519._size$382=$$linkedList._size$382);
                return ret$519;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','reversed']};});$$$cl1.defineAttr($$linkedList,'rest',function(){
                var $$linkedList=this;
                var ret$523=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                $prop$getRet$523={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','rest','$at','ret']};}};
                $prop$getRet$523.get=function(){return ret$523};
                var iter$524=(opt$525=$$linkedList.head$380,opt$525!==null?opt$525.cdr:null);
                function setIter$524(iter$526){return iter$524=iter$526;};
                $prop$getIter$524={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','rest','$at','iter']};}};
                $prop$getIter$524.get=function(){return iter$524};
                $prop$getIter$524.set=setIter$524;
                if (setIter$524.$$metamodel$$===undefined)setIter$524.$$metamodel$$=$prop$getIter$524.$$metamodel$$;
                var opt$525;
                var cell$527;
                while((cell$527=iter$524)!==null){
                    ret$523.add(cell$527.car);
                    iter$524=cell$527.cdr;
                }
                return ret$523;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','rest']};});$$$cl1.defineAttr($$linkedList,'values$379',function(){return this.values$379_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$cont:LinkedList,d:['ceylon.collection','LinkedList','$at','values']};});
        })(LinkedList.$$.prototype);
    }
    return LinkedList;
}
exports.$init$LinkedList=$init$LinkedList;
$init$LinkedList();
function eq(a$528,b$529){
    var a$530;
    if((a$530=a$528)!==null){
        var b$531;
        if((b$531=b$529)!==null){
            return a$530.equals(b$531);
        }
        return false;
    }
    return (!$$$cl1.exists(b$529));
};eq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'a',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'b',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],d:['ceylon.collection','eq']};};
function HashSet(values$532, $$targs$$,$$hashSet){
    $init$HashSet();
    if ($$hashSet===undefined)$$hashSet=new HashSet.$$;
    $$$cl1.set_type_args($$hashSet,$$targs$$);
    if(values$532===undefined){values$532=$$$cl1.getEmpty();}
    $$hashSet.values$532_=values$532;
    MutableSet($$hashSet.$$targs$$===undefined?$$targs$$:{Element:$$hashSet.$$targs$$.Element},$$hashSet);
    $$hashSet.store$533_=makeCellElementArray((16),{Element:$$hashSet.$$targs$$.Element});
    $$hashSet.$prop$getStore$533={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','store']};}};
    $$hashSet.$prop$getStore$533.get=function(){return store$533};
    $$hashSet._size$534_=(0);
    $$hashSet.$prop$get_size$534={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','_size']};}};
    $$hashSet.$prop$get_size$534.get=function(){return _size$534};
    $$hashSet.loadFactor$535_=$$$cl1.Float(0.75);
    $$hashSet.$prop$getLoadFactor$535={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashSet,d:['ceylon.collection','HashSet','$at','loadFactor']};}};
    $$hashSet.$prop$getLoadFactor$535.get=function(){return loadFactor$535};
    var it$536 = $$hashSet.values$532.iterator();
    var val$537;while ((val$537=it$536.next())!==$$$cl1.getFinished()){
        if($$hashSet.addToStore$538($$hashSet.store$533,val$537)){
            (old_size$539=$$hashSet._size$534,$$hashSet._size$534=old_size$539.successor,old_size$539);
            var old_size$539;
        }
    }
    $$hashSet.checkRehash$540();
    return $$hashSet;
}
HashSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'values',$mt:'prm',$def:1,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$tp:{Element:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableSet,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[MutableSet]] implemented as a hash set stored in an [[Array]]\nof singly linked lists. The hash code of an element is defined\nby [[Object.hash]].",148)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','HashSet']};};
exports.HashSet=HashSet;
function $init$HashSet(){
    if (HashSet.$$===undefined){
        $$$cl1.initTypeProto(HashSet,'ceylon.collection::HashSet',$$$cl1.Basic,$init$MutableSet());
        (function($$hashSet){
            $$$cl1.defineAttr($$hashSet,'store$533',function(){return this.store$533_;},function(store$541){return this.store$533_=store$541;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','store']};});
            $$$cl1.defineAttr($$hashSet,'_size$534',function(){return this._size$534_;},function(_size$542){return this._size$534_=_size$542;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','_size']};});
            $$$cl1.defineAttr($$hashSet,'loadFactor$535',function(){return this.loadFactor$535_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashSet,d:['ceylon.collection','HashSet','$at','loadFactor']};});
            $$hashSet.storeIndex$543=function storeIndex$543(elem$544,store$545){
                var $$hashSet=this;
                var i$546=elem$544.hash.remainder(store$545.size);
                return (opt$547=(i$546.negative?i$546.negativeValue:null),opt$547!==null?opt$547:i$546);
                var opt$547;
            };$$hashSet.storeIndex$543.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$an:function(){return[];}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex']};};
            $$hashSet.addToStore$538=function addToStore$538(store$548,element$549){
                var $$hashSet=this;
                var index$550=$$hashSet.storeIndex$543(element$549,store$548);
                var bucket$551=store$548.$get(index$550);
                function setBucket$551(bucket$552){return bucket$551=bucket$552;};
                var cell$553;
                while((cell$553=bucket$551)!==null){
                    if(cell$553.car.equals(element$549)){
                        (cell$553.car=element$549);
                        return false;
                    }
                    bucket$551=cell$553.cdr;
                }
                store$548.set(index$550,Cell(element$549,store$548.$get(index$550),{T:$$hashSet.$$targs$$.Element}));
                return true;
            };$$hashSet.addToStore$538.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$an:function(){return[];}},{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore']};};
            $$hashSet.checkRehash$540=function checkRehash$540(){
                var $$hashSet=this;
                if($$hashSet._size$534.compare($$hashSet.store$533.size.$float.times($$hashSet.loadFactor$535).integer).equals($$$cl1.getLarger())){
                    var newStore$554=makeCellElementArray($$hashSet._size$534.times((2)),{Element:$$hashSet.$$targs$$.Element});
                    $prop$getNewStore$554={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},d:['ceylon.collection','HashSet','$m','checkRehash','$at','newStore']};}};
                    $prop$getNewStore$554.get=function(){return newStore$554};
                    var index$555=(0);
                    function setIndex$555(index$556){return index$555=index$556;};
                    $prop$getIndex$555={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','checkRehash','$at','index']};}};
                    $prop$getIndex$555.get=function(){return index$555};
                    $prop$getIndex$555.set=setIndex$555;
                    if (setIndex$555.$$metamodel$$===undefined)setIndex$555.$$metamodel$$=$prop$getIndex$555.$$metamodel$$;
                    while(index$555.compare($$hashSet.store$533.size).equals($$$cl1.getSmaller())){
                        var bucket$557=$$hashSet.store$533.$get(index$555);
                        function setBucket$557(bucket$558){return bucket$557=bucket$558;};
                        $prop$getBucket$557={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','checkRehash','$at','bucket']};}};
                        $prop$getBucket$557.get=function(){return bucket$557};
                        $prop$getBucket$557.set=setBucket$557;
                        if (setBucket$557.$$metamodel$$===undefined)setBucket$557.$$metamodel$$=$prop$getBucket$557.$$metamodel$$;
                        var cell$559;
                        while((cell$559=bucket$557)!==null){
                            $$hashSet.addToStore$538(newStore$554,cell$559.car);
                            bucket$557=cell$559.cdr;
                        }
                        (oldindex$560=index$555,index$555=oldindex$560.successor,oldindex$560);
                        var oldindex$560;
                    }
                    $$hashSet.store$533=newStore$554;
                }
            };$$hashSet.checkRehash$540.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash']};};
            $$hashSet.add=function add(element$561){
                var $$hashSet=this;
                if($$hashSet.addToStore$538($$hashSet.store$533,element$561)){
                    (old_size$562=$$hashSet._size$534,$$hashSet._size$534=old_size$562.successor,old_size$562);
                    var old_size$562;
                    $$hashSet.checkRehash$540();
                    return true;
                }
                return false;
            };$$hashSet.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','add']};};
            $$hashSet.addAll=function addAll(elements$563){
                var $$hashSet=this;
                var ret$564=false;
                function setRet$564(ret$565){return ret$564=ret$565;};
                var it$566 = elements$563.iterator();
                var elem$567;while ((elem$567=it$566.next())!==$$$cl1.getFinished()){
                    (ret$564=ret$564||$$hashSet.add(elem$567));
                }
                $$hashSet.checkRehash$540();
                return ret$564;
            };$$hashSet.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','addAll']};};
            $$hashSet.remove=function remove(element$568){
                var $$hashSet=this;
                var index$569=$$hashSet.storeIndex$543(element$568,$$hashSet.store$533);
                var bucket$570=$$hashSet.store$533.$get(index$569);
                function setBucket$570(bucket$571){return bucket$570=bucket$571;};
                var prev$572=null;
                function setPrev$572(prev$573){return prev$572=prev$573;};
                var cell$574;
                while((cell$574=bucket$570)!==null){
                    if(cell$574.car.equals(element$568)){
                        var last$575;
                        if((last$575=prev$572)!==null){
                            (last$575.cdr=cell$574.cdr);
                        }else {
                            $$hashSet.store$533.set(index$569,cell$574.cdr);
                        }
                        (old_size$576=$$hashSet._size$534,$$hashSet._size$534=old_size$576.predecessor,old_size$576);
                        var old_size$576;
                        return true;
                    }
                    prev$572=cell$574;
                    bucket$570=cell$574.cdr;
                }
                return false;
            };$$hashSet.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','remove']};};
            $$hashSet.clear=function clear(){
                var $$hashSet=this;
                var index$577=(0);
                function setIndex$577(index$578){return index$577=index$578;};
                while(index$577.compare($$hashSet.store$533.size).equals($$$cl1.getSmaller())){
                    $$hashSet.store$533.set((oldindex$579=index$577,index$577=oldindex$579.successor,oldindex$579),null);
                    var oldindex$579;
                }
                $$hashSet._size$534=(0);
            };$$hashSet.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashSet,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes every element",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','clear']};};
            $$$cl1.defineAttr($$hashSet,'size',function(){
                var $$hashSet=this;
                return $$hashSet._size$534;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','size']};});$$hashSet.iterator=function iterator(){
                var $$hashSet=this;
                function iter$580($$targs$$){
                    var $$iter$580=new iter$580.$$;
                    $$iter$580.$$targs$$=$$targs$$;
                    $$$cl1.Iterator({Element:$$hashSet.$$targs$$.Element},$$iter$580);
                    $$iter$580.index$581_=(0);
                    $$iter$580.$prop$getIndex$581={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$580,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','index']};}};
                    $$iter$580.$prop$getIndex$581.get=function(){return index$581};
                    $$iter$580.bucket$582_=$$hashSet.store$533.$get($$iter$580.index$581);
                    $$iter$580.$prop$getBucket$582={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:iter$580,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','bucket']};}};
                    $$iter$580.$prop$getBucket$582.get=function(){return bucket$582};
                    return $$iter$580;
                };iter$580.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cl1.Iterator,a:{Element:'Element'}}],d:['ceylon.collection','HashSet','$m','iterator','$o','iter']};};
                function $init$iter$580(){
                    if (iter$580.$$===undefined){
                        $$$cl1.initTypeProto(iter$580,'ceylon.collection::HashSet.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
                        (function($$iter$580){
                            $$$cl1.defineAttr($$iter$580,'index$581',function(){return this.index$581_;},function(index$583){return this.index$581_=index$583;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$580,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','index']};});
                            $$$cl1.defineAttr($$iter$580,'bucket$582',function(){return this.bucket$582_;},function(bucket$584){return this.bucket$582_=bucket$584;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:iter$580,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','bucket']};});
                            $$iter$580.next=function next(){
                                var $$iter$580=this;
                                if((!$$$cl1.exists($$iter$580.bucket$582))){
                                    while(($$iter$580.index$581=$$iter$580.index$581.successor).compare($$hashSet.store$533.size).equals($$$cl1.getSmaller())){
                                        $$iter$580.bucket$582=$$hashSet.store$533.$get($$iter$580.index$581);
                                        if($$$cl1.exists($$iter$580.bucket$582)){
                                            break;
                                        }
                                    }
                                }
                                var bucket$585;
                                if((bucket$585=$$iter$580.bucket$582)!==null){
                                    var car$586=bucket$585.car;
                                    $prop$getCar$586={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$m','next','$at','car']};}};
                                    $prop$getCar$586.get=function(){return car$586};
                                    ($$iter$580.bucket$582=bucket$585.cdr);
                                    return car$586;
                                }
                                return $$$cl1.getFinished();
                            };$$iter$580.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:['Element',{t:$$$cl1.Finished}]},$ps:[],$cont:iter$580,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$m','next']};};
                        })(iter$580.$$.prototype);
                    }
                    return iter$580;
                }
                $init$iter$580();
                var iter$587;
                function getIter$587(){
                    if (iter$587===undefined){iter$587=$init$iter$580()({Element:$$hashSet.$$targs$$.Element});iter$587.$$metamodel$$=getIter$587.$$metamodel$$;}
                    return iter$587;
                }
                getIter$587.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iter$580},d:['ceylon.collection','HashSet','$m','iterator','$o','iter']};};
                $prop$getIter$587={get:getIter$587,$$metamodel$$:getIter$587.$$metamodel$$};
                return getIter$587();
            };$$hashSet.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','iterator']};};
            $$hashSet.count=function count(selecting$588){
                var $$hashSet=this;
                var c$589=(0);
                function setC$589(c$590){return c$589=c$590;};
                var index$591=(0);
                function setIndex$591(index$592){return index$591=index$592;};
                while(index$591.compare($$hashSet.store$533.size).equals($$$cl1.getSmaller())){
                    var bucket$593=$$hashSet.store$533.$get(index$591);
                    function setBucket$593(bucket$594){return bucket$593=bucket$594;};
                    $prop$getBucket$593={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','count','$at','bucket']};}};
                    $prop$getBucket$593.get=function(){return bucket$593};
                    $prop$getBucket$593.set=setBucket$593;
                    if (setBucket$593.$$metamodel$$===undefined)setBucket$593.$$metamodel$$=$prop$getBucket$593.$$metamodel$$;
                    var cell$595;
                    while((cell$595=bucket$593)!==null){
                        if(selecting$588(cell$595.car)){
                            (oldc$596=c$589,c$589=oldc$596.successor,oldc$596);
                            var oldc$596;
                        }
                        bucket$593=cell$595.cdr;
                    }
                    (oldindex$597=index$591,index$591=oldindex$597.successor,oldindex$597);
                    var oldindex$597;
                }
                return c$589;
            };$$hashSet.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','count']};};
            $$$cl1.defineAttr($$hashSet,'string',function(){
                var $$hashSet=this;
                var index$598=(0);
                function setIndex$598(index$599){return index$598=index$599;};
                $prop$getIndex$598={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','index']};}};
                $prop$getIndex$598.get=function(){return index$598};
                $prop$getIndex$598.set=setIndex$598;
                if (setIndex$598.$$metamodel$$===undefined)setIndex$598.$$metamodel$$=$prop$getIndex$598.$$metamodel$$;
                var ret$600=$$$cl1.StringBuilder();
                $prop$getRet$600={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','HashSet','$at','string','$at','ret']};}};
                $prop$getRet$600.get=function(){return ret$600};
                ret$600.append($$$cl1.String("(",1));
                var first$601=true;
                function setFirst$601(first$602){return first$601=first$602;};
                $prop$getFirst$601={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','first']};}};
                $prop$getFirst$601.get=function(){return first$601};
                $prop$getFirst$601.set=setFirst$601;
                if (setFirst$601.$$metamodel$$===undefined)setFirst$601.$$metamodel$$=$prop$getFirst$601.$$metamodel$$;
                while(index$598.compare($$hashSet.store$533.size).equals($$$cl1.getSmaller())){
                    var bucket$603=$$hashSet.store$533.$get(index$598);
                    function setBucket$603(bucket$604){return bucket$603=bucket$604;};
                    $prop$getBucket$603={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','bucket']};}};
                    $prop$getBucket$603.get=function(){return bucket$603};
                    $prop$getBucket$603.set=setBucket$603;
                    if (setBucket$603.$$metamodel$$===undefined)setBucket$603.$$metamodel$$=$prop$getBucket$603.$$metamodel$$;
                    var cell$605;
                    while((cell$605=bucket$603)!==null){
                        if((!first$601)){
                            ret$600.append($$$cl1.String(", ",2));
                        }else {
                            first$601=false;
                        }
                        ret$600.append(cell$605.car.string);
                        bucket$603=cell$605.cdr;
                    }
                    (oldindex$606=index$598,index$598=oldindex$606.successor,oldindex$606);
                    var oldindex$606;
                }
                ret$600.append($$$cl1.String(")",1));
                return ret$600.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','string']};});$$$cl1.defineAttr($$hashSet,'hash',function(){
                var $$hashSet=this;
                var index$607=(0);
                function setIndex$607(index$608){return index$607=index$608;};
                $prop$getIndex$607={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','index']};}};
                $prop$getIndex$607.get=function(){return index$607};
                $prop$getIndex$607.set=setIndex$607;
                if (setIndex$607.$$metamodel$$===undefined)setIndex$607.$$metamodel$$=$prop$getIndex$607.$$metamodel$$;
                var hash$609=(17);
                function setHash$609(hash$610){return hash$609=hash$610;};
                $prop$getHash$609={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','hash']};}};
                $prop$getHash$609.get=function(){return hash$609};
                $prop$getHash$609.set=setHash$609;
                if (setHash$609.$$metamodel$$===undefined)setHash$609.$$metamodel$$=$prop$getHash$609.$$metamodel$$;
                while(index$607.compare($$hashSet.store$533.size).equals($$$cl1.getSmaller())){
                    var bucket$611=$$hashSet.store$533.$get(index$607);
                    function setBucket$611(bucket$612){return bucket$611=bucket$612;};
                    $prop$getBucket$611={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','bucket']};}};
                    $prop$getBucket$611.get=function(){return bucket$611};
                    $prop$getBucket$611.set=setBucket$611;
                    if (setBucket$611.$$metamodel$$===undefined)setBucket$611.$$metamodel$$=$prop$getBucket$611.$$metamodel$$;
                    var cell$613;
                    while((cell$613=bucket$611)!==null){
                        hash$609=hash$609.times((31)).plus(cell$613.car.hash);
                        bucket$611=cell$613.cdr;
                    }
                    (oldindex$614=index$607,index$607=oldindex$614.successor,oldindex$614);
                    var oldindex$614;
                }
                return hash$609;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','hash']};});$$hashSet.equals=function equals(that$615){
                var $$hashSet=this;
                var that$616;
                if($$$cl1.isOfType((that$616=that$615),{t:$$$cl1.Set,a:{Element:{t:$$$cl1.Object}}})&&$$hashSet.size.equals(that$616.size)){
                    var index$617=(0);
                    function setIndex$617(index$618){return index$617=index$618;};
                    $prop$getIndex$617={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','equals','$at','index']};}};
                    $prop$getIndex$617.get=function(){return index$617};
                    $prop$getIndex$617.set=setIndex$617;
                    if (setIndex$617.$$metamodel$$===undefined)setIndex$617.$$metamodel$$=$prop$getIndex$617.$$metamodel$$;
                    while(index$617.compare($$hashSet.store$533.size).equals($$$cl1.getSmaller())){
                        var bucket$619=$$hashSet.store$533.$get(index$617);
                        function setBucket$619(bucket$620){return bucket$619=bucket$620;};
                        $prop$getBucket$619={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','equals','$at','bucket']};}};
                        $prop$getBucket$619.get=function(){return bucket$619};
                        $prop$getBucket$619.set=setBucket$619;
                        if (setBucket$619.$$metamodel$$===undefined)setBucket$619.$$metamodel$$=$prop$getBucket$619.$$metamodel$$;
                        var cell$621;
                        while((cell$621=bucket$619)!==null){
                            if((!that$616.contains(cell$621.car))){
                                return false;
                            }
                            bucket$619=cell$621.cdr;
                        }
                        (oldindex$622=index$617,index$617=oldindex$622.successor,oldindex$622);
                        var oldindex$622;
                    }
                    return true;
                }
                return false;
            };$$hashSet.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','equals']};};
            $$$cl1.defineAttr($$hashSet,'clone',function(){
                var $$hashSet=this;
                var clone$623=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
                $prop$getClone$623={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},d:['ceylon.collection','HashSet','$at','clone','$at','clone']};}};
                $prop$getClone$623.get=function(){return clone$623};
                (clone$623._size$534=$$hashSet._size$534);
                (clone$623.store$533=makeCellElementArray($$hashSet.store$533.size,{Element:$$hashSet.$$targs$$.Element}));
                var index$624=(0);
                function setIndex$624(index$625){return index$624=index$625;};
                $prop$getIndex$624={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','clone','$at','index']};}};
                $prop$getIndex$624.get=function(){return index$624};
                $prop$getIndex$624.set=setIndex$624;
                if (setIndex$624.$$metamodel$$===undefined)setIndex$624.$$metamodel$$=$prop$getIndex$624.$$metamodel$$;
                while(index$624.compare($$hashSet.store$533.size).equals($$$cl1.getSmaller())){
                    var bucket$626;
                    if((bucket$626=$$hashSet.store$533.$get(index$624))!==null){
                        clone$623.store$533.set(index$624,bucket$626.clone);
                    }
                    (oldindex$627=index$624,index$624=oldindex$627.successor,oldindex$627);
                    var oldindex$627;
                }
                return clone$623;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','clone']};});$$hashSet.contains=function contains(element$628){
                var $$hashSet=this;
                var index$629=(0);
                function setIndex$629(index$630){return index$629=index$630;};
                while(index$629.compare($$hashSet.store$533.size).equals($$$cl1.getSmaller())){
                    var bucket$631=$$hashSet.store$533.$get(index$629);
                    function setBucket$631(bucket$632){return bucket$631=bucket$632;};
                    $prop$getBucket$631={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','contains','$at','bucket']};}};
                    $prop$getBucket$631.get=function(){return bucket$631};
                    $prop$getBucket$631.set=setBucket$631;
                    if (setBucket$631.$$metamodel$$===undefined)setBucket$631.$$metamodel$$=$prop$getBucket$631.$$metamodel$$;
                    var cell$633;
                    while((cell$633=bucket$631)!==null){
                        if(cell$633.car.equals(element$628)){
                            return true;
                        }
                        bucket$631=cell$633.cdr;
                    }
                    (oldindex$634=index$629,index$629=oldindex$634.successor,oldindex$634);
                    var oldindex$634;
                }
                return false;
            };$$hashSet.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','contains']};};
            $$hashSet.complement=function complement(set$635,$$$mptypes){
                var $$hashSet=this;
                var ret$636=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
                var it$637 = $$hashSet.iterator();
                var elem$638;while ((elem$638=it$637.next())!==$$$cl1.getFinished()){
                    if((!set$635.contains(elem$638))){
                        ret$636.add(elem$638);
                    }
                }
                return ret$636;
            };$$hashSet.complement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','complement']};};
            $$hashSet.exclusiveUnion=function exclusiveUnion(set$639,$$$mptypes){
                var $$hashSet=this;
                var ret$640=HashSet(undefined,{Element:{t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
                var it$641 = $$hashSet.iterator();
                var elem$642;while ((elem$642=it$641.next())!==$$$cl1.getFinished()){
                    if((!set$639.contains(elem$642))){
                        ret$640.add(elem$642);
                    }
                }
                var it$643 = set$639.iterator();
                var elem$644;while ((elem$644=it$643.next())!==$$$cl1.getFinished()){
                    if((!$$hashSet.contains(elem$644))){
                        ret$640.add(elem$644);
                    }
                }
                return ret$640;
            };$$hashSet.exclusiveUnion.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
            $$hashSet.intersection=function intersection(set$645,$$$mptypes){
                var $$hashSet=this;
                var ret$646=HashSet(undefined,{Element:{t:'i', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
                var it$647 = $$hashSet.iterator();
                var elem$648;while ((elem$648=it$647.next())!==$$$cl1.getFinished()){
                    var elem$649;
                    if(set$645.contains(elem$648)&&$$$cl1.isOfType((elem$649=elem$648),$$$mptypes.Other)){
                        ret$646.add(elem$649);
                    }
                }
                return ret$646;
            };$$hashSet.intersection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{t:'i', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','intersection']};};
            $$hashSet.union=function union(set$650,$$$mptypes){
                var $$hashSet=this;
                var ret$651=HashSet(undefined,{Element:{t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
                ret$651.addAll($$hashSet);
                ret$651.addAll(set$650);
                return ret$651;
            };$$hashSet.union.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','union']};};
            $$$cl1.defineAttr($$hashSet,'values$532',function(){return this.values$532_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$cont:HashSet,d:['ceylon.collection','HashSet','$at','values']};});
        })(HashSet.$$.prototype);
    }
    return HashSet;
}
exports.$init$HashSet=$init$HashSet;
$init$HashSet();
function group(elements$652,grouping$653,$$$mptypes){
    var map$654=HashMap(undefined,{Key:$$$mptypes.Group,Item:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}});
    var it$655 = elements$652.iterator();
    var element$656;while ((element$656=it$655.next())!==$$$cl1.getFinished()){
        var group$657=grouping$653(element$656);
        $prop$getGroup$657={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Group',d:['ceylon.collection','group','$at','group']};}};
        $prop$getGroup$657.get=function(){return group$657};
        var sb$658=map$654.$get(group$657);
        $prop$getSb$658={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}}]},d:['ceylon.collection','group','$at','sb']};}};
        $prop$getSb$658.get=function(){return sb$658};
        var sb$659;
        if($$$cl1.isOfType((sb$659=sb$658),{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}})){
            sb$659.append(element$656);
        }else {
            map$654.put(group$657,$$$cl1.SequenceBuilder({Element:$$$mptypes.Element}).append(element$656));
        }
    }
    function fn$660(key$661,item$662){
        var sequence$663=item$662.sequence;
        //assert at group.ceylon (29:8-29:33)
        var sequence$664;
        if (!($$$cl1.nonempty((sequence$664=sequence$663)))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'nonempty sequence\' at group.ceylon (29:14-29:32)"),'29:8-29:33','group.ceylon'); }
        return sequence$664;
    };fn$660.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequence,a:{Element:'Element'}},$ps:[{$nm:'key',$mt:'prm',$t:'Group',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}},$an:function(){return[];}}],d:['ceylon.collection','group','$m','fn']};};
    return map$654.mapItems($$$cl1.$JsCallable(fn$660,[{$nm:'key',$mt:'prm',$t:'Group',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}},$an:function(){return[];}}],{Arguments:{t:'T', l:[$$$mptypes.Group,{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}]},Return:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}}),{Result:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}});
}
exports.group=group;
group.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Group',Item:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Nothing},Element:'Element'}}}},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}},{$nm:'grouping',$mt:'prm',$pt:'f',$t:'Group',$an:function(){return[$$$cl1.doc("A function that returns the key under which to group the \nspecified element.")];}}],$tp:{Group:{'satisfies':[{t:$$$cl1.Object}]},Element:{}},$an:function(){return[$$$cl1.doc($$$cl1.String("Creates a `Map` that contains the `Iterable`\'s\n    elements, grouped in `Sequence`s under the\n    keys provided by the grouping function.",137)),$$$cl1.shared()];},d:['ceylon.collection','group']};};
function MutableList($$targs$$,$$mutableList){
    $$$cl1.List($$mutableList.$$targs$$===undefined?$$targs$$:{Element:$$mutableList.$$targs$$.Element},$$mutableList);
    $$$cl1.set_type_args($$mutableList,$$targs$$);
}
MutableList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{}},satisfies:[{t:$$$cl1.List,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[List]] supporting addition, insertion, removal, and \nmutation of its elements.",82)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.collection','1.0.0').findPackage('ceylon.collection'),MutableMap),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.collection','1.0.0').findPackage('ceylon.collection'),MutableSet)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','MutableList']};};
exports.MutableList=MutableList;
function $init$MutableList(){
    if (MutableList.$$===undefined){
        $$$cl1.initTypeProtoI(MutableList,'ceylon.collection::MutableList',$$$cl1.List);
        (function($$mutableList){
            $$mutableList.set={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:MutableList,$an:function(){return[$$$cl1.doc("Set the item at the given index in this list. The list \nis expanded if `index > size`."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableList','$m','set']};}};$$mutableList.add={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:MutableList,$an:function(){return[$$$cl1.doc("Add the given item to the end of this list."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableList','$m','add']};}};$$mutableList.addAll={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:MutableList,$an:function(){return[$$$cl1.doc("Add the given items to the end of this list."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableList','$m','addAll']};}};$$mutableList.insert={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:MutableList,$an:function(){return[$$$cl1.doc("Insert the given item at the specified index. The list \nis expanded if `index > size`."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableList','$m','insert']};}};$$mutableList.remove={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:MutableList,$an:function(){return[$$$cl1.doc("Remove the item at the specified index, returning the\nremoved item, or null if there was no such item."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableList','$m','remove']};}};$$mutableList.removeElement={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:MutableList,$an:function(){return[$$$cl1.doc("Remove all occurrences of the given value from this\nlist."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableList','$m','removeElement']};}};$$mutableList.clear={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:MutableList,$an:function(){return[$$$cl1.doc("Remove every item from this list, leaving an empty list."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableList','$m','clear']};}};$$mutableList.removeFirst=function (){
                var $$mutableList=this;
                return $$mutableList.remove((0));
            };
            $$mutableList.removeFirst.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Element']},$ps:[],$cont:MutableList,$an:function(){return[$$$cl1.doc($$$cl1.String("Remove the item with index `0` from this list, returning \nthe removed item, or null if there was no such item.",110)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.collection','MutableList','$m','removeFirst']};};
            $$mutableList.removeLast=function (){
                var $$mutableList=this;
                return $$mutableList.remove($$mutableList.size.minus((1)));
            };
            $$mutableList.removeLast.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Element']},$ps:[],$cont:MutableList,$an:function(){return[$$$cl1.doc($$$cl1.String("Remove the item with index `size-1` from this list, \nreturning the removed item, or null if there was no such \nitem.",116)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.collection','MutableList','$m','removeLast']};};
        })(MutableList.$$.prototype);
    }
    return MutableList;
}
exports.$init$MutableList=$init$MutableList;
$init$MutableList();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("A module for collections.\n\nYou can find here the following mutable collection types:\n\n- [[MutableList]]\n- [[MutableSet]]\n- [[MutableMap]]\n\nAlong with concrete implementations for each:\n\n- [[LinkedList]]\n- [[HashSet]]\n- [[HashMap]]\n",231)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.license($$$cl1.String("Apache Software License",23))];};
function makeCellEntryArray(size$665,$$$mptypes){
    return $$$cl1.arrayOfSize(size$665,null,{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:$$$mptypes.Key,Item:$$$mptypes.Item}}}}]}});
};makeCellEntryArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$ps:[{$nm:'size',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},d:['ceylon.collection','makeCellEntryArray']};};
function makeCellElementArray(size$666,$$$mptypes){
    return $$$cl1.arrayOfSize(size$666,null,{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:$$$mptypes.Element}}]}});
};makeCellElementArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$ps:[{$nm:'size',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$tp:{Element:{}},d:['ceylon.collection','makeCellElementArray']};};
function HashMap(initialValues$667, $$targs$$,$$hashMap){
    $init$HashMap();
    if ($$hashMap===undefined)$$hashMap=new HashMap.$$;
    $$$cl1.set_type_args($$hashMap,$$targs$$);
    if(initialValues$667===undefined){initialValues$667=$$$cl1.getEmpty();}
    $$hashMap.initialValues$667_=initialValues$667;
    MutableMap($$hashMap.$$targs$$===undefined?$$targs$$:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item},$$hashMap);
    $$hashMap.store$668_=makeCellEntryArray((16),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
    $$hashMap.$prop$getStore$668={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','store']};}};
    $$hashMap.$prop$getStore$668.get=function(){return store$668};
    $$hashMap._size$669_=(0);
    $$hashMap.$prop$get_size$669={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','_size']};}};
    $$hashMap.$prop$get_size$669.get=function(){return _size$669};
    $$hashMap.loadFactor$670_=$$$cl1.Float(0.75);
    $$hashMap.$prop$getLoadFactor$670={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashMap,d:['ceylon.collection','HashMap','$at','loadFactor']};}};
    $$hashMap.$prop$getLoadFactor$670.get=function(){return loadFactor$670};
    var it$671 = $$hashMap.initialValues$667.iterator();
    var item$672;while ((item$672=it$671.next())!==$$$cl1.getFinished()){
        var key$673=item$672.key;
        var item$674=item$672.item;
        if($$hashMap.addToStore$675($$hashMap.store$668,key$673,item$674)){
            (old_size$676=$$hashMap._size$669,$$hashMap._size$669=old_size$676.successor,old_size$676);
            var old_size$676;
        }
    }
    $$hashMap.checkRehash$677();
    return $$hashMap;
}
HashMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'initialValues',$mt:'prm',$def:1,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$an:function(){return[];}}],$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableMap,a:{Key:'Key',Item:'Item'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[MutableMap]] implemented as a hash map stored in an [[Array]]\nof singly linked lists of entries. The hash code of a key is \ndefined by [[Object.hash]].",155)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','HashMap']};};
exports.HashMap=HashMap;
function $init$HashMap(){
    if (HashMap.$$===undefined){
        $$$cl1.initTypeProto(HashMap,'ceylon.collection::HashMap',$$$cl1.Basic,$init$MutableMap());
        (function($$hashMap){
            $$$cl1.defineAttr($$hashMap,'store$668',function(){return this.store$668_;},function(store$678){return this.store$668_=store$678;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','store']};});
            $$$cl1.defineAttr($$hashMap,'_size$669',function(){return this._size$669_;},function(_size$679){return this._size$669_=_size$679;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','_size']};});
            $$$cl1.defineAttr($$hashMap,'loadFactor$670',function(){return this.loadFactor$670_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashMap,d:['ceylon.collection','HashMap','$at','loadFactor']};});
            $$hashMap.storeIndex$680=function storeIndex$680(key$681,store$682){
                var $$hashMap=this;
                var i$683=key$681.hash.remainder(store$682.size);
                return (opt$684=(i$683.negative?i$683.negativeValue:null),opt$684!==null?opt$684:i$683);
                var opt$684;
            };$$hashMap.storeIndex$680.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$an:function(){return[];}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex']};};
            $$hashMap.addToStore$675=function addToStore$675(store$685,key$686,item$687){
                var $$hashMap=this;
                var index$688=$$hashMap.storeIndex$680(key$686,store$685);
                var bucket$689=store$685.$get(index$688);
                function setBucket$689(bucket$690){return bucket$689=bucket$690;};
                var cell$691;
                while((cell$691=bucket$689)!==null){
                    if(cell$691.car.key.equals(key$686)){
                        (cell$691.car=$$$cl1.Entry(key$686,item$687,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                        return false;
                    }
                    bucket$689=cell$691.cdr;
                }
                store$685.set(index$688,Cell($$$cl1.Entry(key$686,item$687,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),store$685.$get(index$688),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
                return true;
            };$$hashMap.addToStore$675.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:'Item',$an:function(){return[];}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore']};};
            $$hashMap.checkRehash$677=function checkRehash$677(){
                var $$hashMap=this;
                if($$hashMap._size$669.compare($$hashMap.store$668.size.$float.times($$hashMap.loadFactor$670).integer).equals($$$cl1.getLarger())){
                    var newStore$692=makeCellEntryArray($$hashMap._size$669.times((2)),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
                    $prop$getNewStore$692={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},d:['ceylon.collection','HashMap','$m','checkRehash','$at','newStore']};}};
                    $prop$getNewStore$692.get=function(){return newStore$692};
                    var index$693=(0);
                    function setIndex$693(index$694){return index$693=index$694;};
                    $prop$getIndex$693={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','checkRehash','$at','index']};}};
                    $prop$getIndex$693.get=function(){return index$693};
                    $prop$getIndex$693.set=setIndex$693;
                    if (setIndex$693.$$metamodel$$===undefined)setIndex$693.$$metamodel$$=$prop$getIndex$693.$$metamodel$$;
                    while(index$693.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                        var bucket$695=$$hashMap.store$668.$get(index$693);
                        function setBucket$695(bucket$696){return bucket$695=bucket$696;};
                        $prop$getBucket$695={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','checkRehash','$at','bucket']};}};
                        $prop$getBucket$695.get=function(){return bucket$695};
                        $prop$getBucket$695.set=setBucket$695;
                        if (setBucket$695.$$metamodel$$===undefined)setBucket$695.$$metamodel$$=$prop$getBucket$695.$$metamodel$$;
                        var cell$697;
                        while((cell$697=bucket$695)!==null){
                            $$hashMap.addToStore$675(newStore$692,cell$697.car.key,cell$697.car.item);
                            bucket$695=cell$697.cdr;
                        }
                        (oldindex$698=index$693,index$693=oldindex$698.successor,oldindex$698);
                        var oldindex$698;
                    }
                    $$hashMap.store$668=newStore$692;
                }
            };$$hashMap.checkRehash$677.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash']};};
            $$hashMap.put=function put(key$699,item$700){
                var $$hashMap=this;
                var index$701=$$hashMap.storeIndex$680(key$699,$$hashMap.store$668);
                var bucket$702=$$hashMap.store$668.$get(index$701);
                function setBucket$702(bucket$703){return bucket$702=bucket$703;};
                var cell$704;
                while((cell$704=bucket$702)!==null){
                    if(cell$704.car.key.equals(key$699)){
                        var oldValue$705=cell$704.car.item;
                        $prop$getOldValue$705={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Item',d:['ceylon.collection','HashMap','$m','put','$at','oldValue']};}};
                        $prop$getOldValue$705.get=function(){return oldValue$705};
                        (cell$704.car=$$$cl1.Entry(key$699,item$700,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                        return oldValue$705;
                    }
                    bucket$702=cell$704.cdr;
                }
                $$hashMap.store$668.set(index$701,Cell($$$cl1.Entry(key$699,item$700,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),$$hashMap.store$668.$get(index$701),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
                (old_size$706=$$hashMap._size$669,$$hashMap._size$669=old_size$706.successor,old_size$706);
                var old_size$706;
                $$hashMap.checkRehash$677();
                return null;
            };$$hashMap.put.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:'Item',$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','put']};};
            $$hashMap.putAll=function putAll(entries$707){
                var $$hashMap=this;
                var it$708 = entries$707.iterator();
                var entry$709;while ((entry$709=it$708.next())!==$$$cl1.getFinished()){
                    if($$hashMap.addToStore$675($$hashMap.store$668,entry$709.key,entry$709.item)){
                        (old_size$710=$$hashMap._size$669,$$hashMap._size$669=old_size$710.successor,old_size$710);
                        var old_size$710;
                    }
                }
                $$hashMap.checkRehash$677();
            };$$hashMap.putAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a collection of key/value mappings to this map, may be used to change existing mappings",92)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','putAll']};};
            $$hashMap.remove=function remove(key$711){
                var $$hashMap=this;
                var index$712=$$hashMap.storeIndex$680(key$711,$$hashMap.store$668);
                var bucket$713=$$hashMap.store$668.$get(index$712);
                function setBucket$713(bucket$714){return bucket$713=bucket$714;};
                var prev$715=null;
                function setPrev$715(prev$716){return prev$715=prev$716;};
                var cell$717;
                while((cell$717=bucket$713)!==null){
                    if(cell$717.car.key.equals(key$711)){
                        var last$718;
                        if((last$718=prev$715)!==null){
                            (last$718.cdr=cell$717.cdr);
                        }else {
                            $$hashMap.store$668.set(index$712,cell$717.cdr);
                        }
                        (old_size$719=$$hashMap._size$669,$$hashMap._size$669=old_size$719.predecessor,old_size$719);
                        var old_size$719;
                        return cell$717.car.item;
                    }
                    prev$715=cell$717;
                    bucket$713=cell$717.cdr;
                }
                return null;
            };$$hashMap.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes a key/value mapping if it exists",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','remove']};};
            $$hashMap.clear=function clear(){
                var $$hashMap=this;
                var index$720=(0);
                function setIndex$720(index$721){return index$720=index$721;};
                while(index$720.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                    $$hashMap.store$668.set((oldindex$722=index$720,index$720=oldindex$722.successor,oldindex$722),null);
                    var oldindex$722;
                }
                $$hashMap._size$669=(0);
            };$$hashMap.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes every key/value mapping",31)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','clear']};};
            $$$cl1.defineAttr($$hashMap,'size',function(){
                var $$hashMap=this;
                return $$hashMap._size$669;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','size']};});$$hashMap.$get=function $get(key$723){
                var $$hashMap=this;
                if($$hashMap.empty){
                    return null;
                }
                var index$724=$$hashMap.storeIndex$680(key$723,$$hashMap.store$668);
                var bucket$725=$$hashMap.store$668.$get(index$724);
                function setBucket$725(bucket$726){return bucket$725=bucket$726;};
                var cell$727;
                while((cell$727=bucket$725)!==null){
                    if(cell$727.car.key.equals(key$723)){
                        return cell$727.car.item;
                    }
                    bucket$725=cell$727.cdr;
                }
                return null;
            };$$hashMap.$get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','get']};};
            $$$cl1.defineAttr($$hashMap,'values',function(){
                var $$hashMap=this;
                var ret$728=LinkedList(undefined,{Element:$$hashMap.$$targs$$.Item});
                $prop$getRet$728={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableList,a:{Element:'Item'}},d:['ceylon.collection','HashMap','$at','values','$at','ret']};}};
                $prop$getRet$728.get=function(){return ret$728};
                var index$729=(0);
                function setIndex$729(index$730){return index$729=index$730;};
                $prop$getIndex$729={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','values','$at','index']};}};
                $prop$getIndex$729.get=function(){return index$729};
                $prop$getIndex$729.set=setIndex$729;
                if (setIndex$729.$$metamodel$$===undefined)setIndex$729.$$metamodel$$=$prop$getIndex$729.$$metamodel$$;
                while(index$729.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                    var bucket$731=$$hashMap.store$668.$get(index$729);
                    function setBucket$731(bucket$732){return bucket$731=bucket$732;};
                    $prop$getBucket$731={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','values','$at','bucket']};}};
                    $prop$getBucket$731.get=function(){return bucket$731};
                    $prop$getBucket$731.set=setBucket$731;
                    if (setBucket$731.$$metamodel$$===undefined)setBucket$731.$$metamodel$$=$prop$getBucket$731.$$metamodel$$;
                    var cell$733;
                    while((cell$733=bucket$731)!==null){
                        ret$728.add(cell$733.car.item);
                        bucket$731=cell$733.cdr;
                    }
                    (oldindex$734=index$729,index$729=oldindex$734.successor,oldindex$734);
                    var oldindex$734;
                }
                return ret$728;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Collection,a:{Element:'Item'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','values']};});$$$cl1.defineAttr($$hashMap,'keys',function(){
                var $$hashMap=this;
                var ret$735=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
                $prop$getRet$735={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableSet,a:{Element:'Key'}},d:['ceylon.collection','HashMap','$at','keys','$at','ret']};}};
                $prop$getRet$735.get=function(){return ret$735};
                var index$736=(0);
                function setIndex$736(index$737){return index$736=index$737;};
                $prop$getIndex$736={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','keys','$at','index']};}};
                $prop$getIndex$736.get=function(){return index$736};
                $prop$getIndex$736.set=setIndex$736;
                if (setIndex$736.$$metamodel$$===undefined)setIndex$736.$$metamodel$$=$prop$getIndex$736.$$metamodel$$;
                while(index$736.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                    var bucket$738=$$hashMap.store$668.$get(index$736);
                    function setBucket$738(bucket$739){return bucket$738=bucket$739;};
                    $prop$getBucket$738={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','keys','$at','bucket']};}};
                    $prop$getBucket$738.get=function(){return bucket$738};
                    $prop$getBucket$738.set=setBucket$738;
                    if (setBucket$738.$$metamodel$$===undefined)setBucket$738.$$metamodel$$=$prop$getBucket$738.$$metamodel$$;
                    var cell$740;
                    while((cell$740=bucket$738)!==null){
                        ret$735.add(cell$740.car.key);
                        bucket$738=cell$740.cdr;
                    }
                    (oldindex$741=index$736,index$736=oldindex$741.successor,oldindex$741);
                    var oldindex$741;
                }
                return ret$735;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Set,a:{Element:'Key'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','keys']};});$$$cl1.defineAttr($$hashMap,'inverse',function(){
                var $$hashMap=this;
                var ret$742=HashMap(undefined,{Key:$$hashMap.$$targs$$.Item,Item:{t:MutableSet,a:{Element:$$hashMap.$$targs$$.Key}}});
                $prop$getRet$742={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableMap,a:{Key:'Item',Item:{t:MutableSet,a:{Element:'Key'}}}},d:['ceylon.collection','HashMap','$at','inverse','$at','ret']};}};
                $prop$getRet$742.get=function(){return ret$742};
                var index$743=(0);
                function setIndex$743(index$744){return index$743=index$744;};
                $prop$getIndex$743={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','inverse','$at','index']};}};
                $prop$getIndex$743.get=function(){return index$743};
                $prop$getIndex$743.set=setIndex$743;
                if (setIndex$743.$$metamodel$$===undefined)setIndex$743.$$metamodel$$=$prop$getIndex$743.$$metamodel$$;
                while(index$743.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                    var bucket$745=$$hashMap.store$668.$get(index$743);
                    function setBucket$745(bucket$746){return bucket$745=bucket$746;};
                    $prop$getBucket$745={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','inverse','$at','bucket']};}};
                    $prop$getBucket$745.get=function(){return bucket$745};
                    $prop$getBucket$745.set=setBucket$745;
                    if (setBucket$745.$$metamodel$$===undefined)setBucket$745.$$metamodel$$=$prop$getBucket$745.$$metamodel$$;
                    var cell$747;
                    while((cell$747=bucket$745)!==null){
                        var keys$748=ret$742.$get(cell$747.car.item);
                        $prop$getKeys$748={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:MutableSet,a:{Element:'Key'}}]},d:['ceylon.collection','HashMap','$at','inverse','$at','keys']};}};
                        $prop$getKeys$748.get=function(){return keys$748};
                        var keys$749;
                        if((keys$749=keys$748)!==null){
                            keys$749.add(cell$747.car.key);
                        }else {
                            var k$750=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
                            $prop$getK$750={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableSet,a:{Element:'Key'}},d:['ceylon.collection','HashMap','$at','inverse','$at','k']};}};
                            $prop$getK$750.get=function(){return k$750};
                            ret$742.put(cell$747.car.item,k$750);
                            k$750.add(cell$747.car.key);
                        }
                        bucket$745=cell$747.cdr;
                    }
                    (oldindex$751=index$743,index$743=oldindex$751.successor,oldindex$751);
                    var oldindex$751;
                }
                return ret$742;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Item',Item:{t:$$$cl1.Set,a:{Element:'Key'}}}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','inverse']};});$$hashMap.iterator=function iterator(){
                var $$hashMap=this;
                function iter$752($$targs$$){
                    var $$iter$752=new iter$752.$$;
                    $$iter$752.$$targs$$=$$targs$$;
                    $$$cl1.Iterator({Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}},$$iter$752);
                    $$$cl1.add_type_arg($$iter$752,'Element',{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}});
                    $$iter$752.index$753_=(0);
                    $$iter$752.$prop$getIndex$753={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$752,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','index']};}};
                    $$iter$752.$prop$getIndex$753.get=function(){return index$753};
                    $$iter$752.bucket$754_=$$hashMap.store$668.$get($$iter$752.index$753);
                    $$iter$752.$prop$getBucket$754={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$cont:iter$752,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','bucket']};}};
                    $$iter$752.$prop$getBucket$754.get=function(){return bucket$754};
                    return $$iter$752;
                };iter$752.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}],d:['ceylon.collection','HashMap','$m','iterator','$o','iter']};};
                function $init$iter$752(){
                    if (iter$752.$$===undefined){
                        $$$cl1.initTypeProto(iter$752,'ceylon.collection::HashMap.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
                        (function($$iter$752){
                            $$$cl1.defineAttr($$iter$752,'index$753',function(){return this.index$753_;},function(index$755){return this.index$753_=index$755;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$752,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','index']};});
                            $$$cl1.defineAttr($$iter$752,'bucket$754',function(){return this.bucket$754_;},function(bucket$756){return this.bucket$754_=bucket$756;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$cont:iter$752,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','bucket']};});
                            $$iter$752.next=function next(){
                                var $$iter$752=this;
                                if((!$$$cl1.exists($$iter$752.bucket$754))){
                                    while(($$iter$752.index$753=$$iter$752.index$753.successor).compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                                        $$iter$752.bucket$754=$$hashMap.store$668.$get($$iter$752.index$753);
                                        if($$$cl1.exists($$iter$752.bucket$754)){
                                            break;
                                        }
                                    }
                                }
                                var bucket$757;
                                if((bucket$757=$$iter$752.bucket$754)!==null){
                                    var car$758=bucket$757.car;
                                    $prop$getCar$758={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$m','next','$at','car']};}};
                                    $prop$getCar$758.get=function(){return car$758};
                                    ($$iter$752.bucket$754=bucket$757.cdr);
                                    return car$758;
                                }
                                return $$$cl1.getFinished();
                            };$$iter$752.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}},{t:$$$cl1.Finished}]},$ps:[],$cont:iter$752,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$m','next']};};
                        })(iter$752.$$.prototype);
                    }
                    return iter$752;
                }
                $init$iter$752();
                var iter$759;
                function getIter$759(){
                    if (iter$759===undefined){iter$759=$init$iter$752()({Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}});iter$759.$$metamodel$$=getIter$759.$$metamodel$$;}
                    return iter$759;
                }
                getIter$759.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iter$752},d:['ceylon.collection','HashMap','$m','iterator','$o','iter']};};
                $prop$getIter$759={get:getIter$759,$$metamodel$$:getIter$759.$$metamodel$$};
                return getIter$759();
            };$$hashMap.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$ps:[],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','iterator']};};
            $$hashMap.count=function count(selecting$760){
                var $$hashMap=this;
                var index$761=(0);
                function setIndex$761(index$762){return index$761=index$762;};
                var count$763=(0);
                function setCount$763(count$764){return count$763=count$764;};
                while(index$761.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                    var bucket$765=$$hashMap.store$668.$get(index$761);
                    function setBucket$765(bucket$766){return bucket$765=bucket$766;};
                    $prop$getBucket$765={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','count','$at','bucket']};}};
                    $prop$getBucket$765.get=function(){return bucket$765};
                    $prop$getBucket$765.set=setBucket$765;
                    if (setBucket$765.$$metamodel$$===undefined)setBucket$765.$$metamodel$$=$prop$getBucket$765.$$metamodel$$;
                    var cell$767;
                    while((cell$767=bucket$765)!==null){
                        if(selecting$760(cell$767.car)){
                            (oldcount$768=count$763,count$763=oldcount$768.successor,oldcount$768);
                            var oldcount$768;
                        }
                        bucket$765=cell$767.cdr;
                    }
                    (oldindex$769=index$761,index$761=oldindex$769.successor,oldindex$769);
                    var oldindex$769;
                }
                return count$763;
            };$$hashMap.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','count']};};
            $$$cl1.defineAttr($$hashMap,'string',function(){
                var $$hashMap=this;
                var index$770=(0);
                function setIndex$770(index$771){return index$770=index$771;};
                $prop$getIndex$770={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','index']};}};
                $prop$getIndex$770.get=function(){return index$770};
                $prop$getIndex$770.set=setIndex$770;
                if (setIndex$770.$$metamodel$$===undefined)setIndex$770.$$metamodel$$=$prop$getIndex$770.$$metamodel$$;
                var ret$772=$$$cl1.StringBuilder();
                $prop$getRet$772={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','HashMap','$at','string','$at','ret']};}};
                $prop$getRet$772.get=function(){return ret$772};
                ret$772.append($$$cl1.String("{",1));
                var first$773=true;
                function setFirst$773(first$774){return first$773=first$774;};
                $prop$getFirst$773={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','first']};}};
                $prop$getFirst$773.get=function(){return first$773};
                $prop$getFirst$773.set=setFirst$773;
                if (setFirst$773.$$metamodel$$===undefined)setFirst$773.$$metamodel$$=$prop$getFirst$773.$$metamodel$$;
                while(index$770.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                    var bucket$775=$$hashMap.store$668.$get(index$770);
                    function setBucket$775(bucket$776){return bucket$775=bucket$776;};
                    $prop$getBucket$775={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','bucket']};}};
                    $prop$getBucket$775.get=function(){return bucket$775};
                    $prop$getBucket$775.set=setBucket$775;
                    if (setBucket$775.$$metamodel$$===undefined)setBucket$775.$$metamodel$$=$prop$getBucket$775.$$metamodel$$;
                    var cell$777;
                    while((cell$777=bucket$775)!==null){
                        if((!first$773)){
                            ret$772.append($$$cl1.String(", ",2));
                        }else {
                            first$773=false;
                        }
                        ret$772.append(cell$777.car.key.string);
                        ret$772.append($$$cl1.String("->",2));
                        ret$772.append(cell$777.car.item.string);
                        bucket$775=cell$777.cdr;
                    }
                    (oldindex$778=index$770,index$770=oldindex$778.successor,oldindex$778);
                    var oldindex$778;
                }
                ret$772.append($$$cl1.String("}",1));
                return ret$772.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','string']};});$$$cl1.defineAttr($$hashMap,'hash',function(){
                var $$hashMap=this;
                var index$779=(0);
                function setIndex$779(index$780){return index$779=index$780;};
                $prop$getIndex$779={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','index']};}};
                $prop$getIndex$779.get=function(){return index$779};
                $prop$getIndex$779.set=setIndex$779;
                if (setIndex$779.$$metamodel$$===undefined)setIndex$779.$$metamodel$$=$prop$getIndex$779.$$metamodel$$;
                var hash$781=(17);
                function setHash$781(hash$782){return hash$781=hash$782;};
                $prop$getHash$781={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','hash']};}};
                $prop$getHash$781.get=function(){return hash$781};
                $prop$getHash$781.set=setHash$781;
                if (setHash$781.$$metamodel$$===undefined)setHash$781.$$metamodel$$=$prop$getHash$781.$$metamodel$$;
                while(index$779.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                    var bucket$783=$$hashMap.store$668.$get(index$779);
                    function setBucket$783(bucket$784){return bucket$783=bucket$784;};
                    $prop$getBucket$783={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','bucket']};}};
                    $prop$getBucket$783.get=function(){return bucket$783};
                    $prop$getBucket$783.set=setBucket$783;
                    if (setBucket$783.$$metamodel$$===undefined)setBucket$783.$$metamodel$$=$prop$getBucket$783.$$metamodel$$;
                    var cell$785;
                    while((cell$785=bucket$783)!==null){
                        hash$781=hash$781.times((31)).plus(cell$785.car.hash);
                        bucket$783=cell$785.cdr;
                    }
                    (oldindex$786=index$779,index$779=oldindex$786.successor,oldindex$786);
                    var oldindex$786;
                }
                return hash$781;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','hash']};});$$hashMap.equals=function equals(that$787){
                var $$hashMap=this;
                var that$788;
                if($$$cl1.isOfType((that$788=that$787),{t:$$$cl1.Map,a:{Key:{t:$$$cl1.Object},Item:{t:$$$cl1.Object}}})&&$$hashMap.size.equals(that$788.size)){
                    var index$789=(0);
                    function setIndex$789(index$790){return index$789=index$790;};
                    $prop$getIndex$789={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','equals','$at','index']};}};
                    $prop$getIndex$789.get=function(){return index$789};
                    $prop$getIndex$789.set=setIndex$789;
                    if (setIndex$789.$$metamodel$$===undefined)setIndex$789.$$metamodel$$=$prop$getIndex$789.$$metamodel$$;
                    while(index$789.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                        var bucket$791=$$hashMap.store$668.$get(index$789);
                        function setBucket$791(bucket$792){return bucket$791=bucket$792;};
                        $prop$getBucket$791={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','equals','$at','bucket']};}};
                        $prop$getBucket$791.get=function(){return bucket$791};
                        $prop$getBucket$791.set=setBucket$791;
                        if (setBucket$791.$$metamodel$$===undefined)setBucket$791.$$metamodel$$=$prop$getBucket$791.$$metamodel$$;
                        var cell$793;
                        while((cell$793=bucket$791)!==null){
                            var item$794=that$788.$get(cell$793.car.key);
                            $prop$getItem$794={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},d:['ceylon.collection','HashMap','$m','equals','$at','item']};}};
                            $prop$getItem$794.get=function(){return item$794};
                            var item$795;
                            if((item$795=item$794)!==null){
                                if((!item$795.equals(cell$793.car.item))){
                                    return false;
                                }
                            }else {
                                return false;
                            }
                            bucket$791=cell$793.cdr;
                        }
                        (oldindex$796=index$789,index$789=oldindex$796.successor,oldindex$796);
                        var oldindex$796;
                    }
                    return true;
                }
                return false;
            };$$hashMap.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','equals']};};
            $$$cl1.defineAttr($$hashMap,'clone',function(){
                var $$hashMap=this;
                var clone$797=HashMap(undefined,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
                $prop$getClone$797={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashMap,a:{Key:'Key',Item:'Item'}},d:['ceylon.collection','HashMap','$at','clone','$at','clone']};}};
                $prop$getClone$797.get=function(){return clone$797};
                (clone$797._size$669=$$hashMap._size$669);
                (clone$797.store$668=makeCellEntryArray($$hashMap.store$668.size,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                var index$798=(0);
                function setIndex$798(index$799){return index$798=index$799;};
                $prop$getIndex$798={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','clone','$at','index']};}};
                $prop$getIndex$798.get=function(){return index$798};
                $prop$getIndex$798.set=setIndex$798;
                if (setIndex$798.$$metamodel$$===undefined)setIndex$798.$$metamodel$$=$prop$getIndex$798.$$metamodel$$;
                while(index$798.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                    var bucket$800;
                    if((bucket$800=$$hashMap.store$668.$get(index$798))!==null){
                        clone$797.store$668.set(index$798,bucket$800.clone);
                    }
                    (oldindex$801=index$798,index$798=oldindex$801.successor,oldindex$801);
                    var oldindex$801;
                }
                return clone$797;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Key',Item:'Item'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','clone']};});$$hashMap.contains=function contains(element$802){
                var $$hashMap=this;
                var index$803=(0);
                function setIndex$803(index$804){return index$803=index$804;};
                while(index$803.compare($$hashMap.store$668.size).equals($$$cl1.getSmaller())){
                    var bucket$805=$$hashMap.store$668.$get(index$803);
                    function setBucket$805(bucket$806){return bucket$805=bucket$806;};
                    $prop$getBucket$805={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','contains','$at','bucket']};}};
                    $prop$getBucket$805.get=function(){return bucket$805};
                    $prop$getBucket$805.set=setBucket$805;
                    if (setBucket$805.$$metamodel$$===undefined)setBucket$805.$$metamodel$$=$prop$getBucket$805.$$metamodel$$;
                    var cell$807;
                    while((cell$807=bucket$805)!==null){
                        if(cell$807.car.item.equals(element$802)){
                            return true;
                        }
                        bucket$805=cell$807.cdr;
                    }
                    (oldindex$808=index$803,index$803=oldindex$808.successor,oldindex$808);
                    var oldindex$808;
                }
                return false;
            };$$hashMap.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','contains']};};
            $$$cl1.defineAttr($$hashMap,'initialValues$667',function(){return this.initialValues$667_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$cont:HashMap,d:['ceylon.collection','HashMap','$at','initialValues']};});
        })(HashMap.$$.prototype);
    }
    return HashMap;
}
exports.$init$HashMap=$init$HashMap;
$init$HashMap();
function Cell(_car$809, _cdr$810, $$targs$$,$$cell){
    $init$Cell();
    if ($$cell===undefined)$$cell=new Cell.$$;
    $$$cl1.set_type_args($$cell,$$targs$$);
    $$cell._car$809_=_car$809;
    $$cell._cdr$810_=_cdr$810;
    $$$cl1.Cloneable($$cell.$$targs$$===undefined?$$targs$$:{Clone:{t:Cell,a:{T:$$cell.$$targs$$.T}}},$$cell);
    $$$cl1.add_type_arg($$cell,'Clone',{t:Cell,a:{T:$$cell.$$targs$$.T}});
    $$cell.car$811_=$$cell._car$809;
    $$cell.$prop$getCar={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'T',$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','car']};}};
    $$cell.$prop$getCar.get=function(){return car};
    $$cell.cdr$812_=$$cell._cdr$810;
    $$cell.$prop$getCdr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','cdr']};}};
    $$cell.$prop$getCdr.get=function(){return cdr};
    return $$cell;
}
Cell.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'_car',$mt:'prm',$t:'T',$an:function(){return[];}},{$nm:'_cdr',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$an:function(){return[];}}],$tp:{T:{}},satisfies:[{t:$$$cl1.Cloneable,a:{Clone:{t:Cell,a:{T:'T'}}}}],d:['ceylon.collection','Cell']};};
function $init$Cell(){
    if (Cell.$$===undefined){
        $$$cl1.initTypeProto(Cell,'ceylon.collection::Cell',$$$cl1.Basic,$$$cl1.Cloneable);
        (function($$cell){
            $$$cl1.defineAttr($$cell,'car',function(){return this.car$811_;},function(car$813){return this.car$811_=car$813;},function(){return{mod:$$METAMODEL$$,$t:'T',$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','car']};});
            $$$cl1.defineAttr($$cell,'cdr',function(){return this.cdr$812_;},function(cdr$814){return this.cdr$812_=cdr$814;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','cdr']};});
            $$$cl1.defineAttr($$cell,'clone',function(){
                var $$cell=this;
                return Cell($$cell.car,(opt$815=$$cell.cdr,opt$815!==null?opt$815.clone:null),{T:$$cell.$$targs$$.T});
                var opt$815;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'T'}},$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','Cell','$at','clone']};});$$$cl1.defineAttr($$cell,'_car$809',function(){return this._car$809_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'T',$cont:Cell,d:['ceylon.collection','Cell','$at','_car']};});
            $$$cl1.defineAttr($$cell,'_cdr$810',function(){return this._cdr$810_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:Cell,d:['ceylon.collection','Cell','$at','_cdr']};});
        })(Cell.$$.prototype);
    }
    return Cell;
}
exports.$init$Cell=$init$Cell;
$init$Cell();
function CellIterator(iter$816, $$targs$$,$$cellIterator){
    $init$CellIterator();
    if ($$cellIterator===undefined)$$cellIterator=new CellIterator.$$;
    $$$cl1.set_type_args($$cellIterator,$$targs$$);
    $$cellIterator.iter$816_=iter$816;
    $$$cl1.Iterator($$cellIterator.$$targs$$===undefined?$$targs$$:{Element:$$cellIterator.$$targs$$.T},$$cellIterator);
    $$cellIterator.$prop$getIter$816={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:CellIterator,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','CellIterator','$at','iter']};}};
    $$cellIterator.$prop$getIter$816.get=function(){return iter$816};
    return $$cellIterator;
}
CellIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'iter',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$an:function(){return[$$$cl1.variable()];}}],$tp:{T:{}},satisfies:[{t:$$$cl1.Iterator,a:{Element:'T'}}],d:['ceylon.collection','CellIterator']};};
function $init$CellIterator(){
    if (CellIterator.$$===undefined){
        $$$cl1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',$$$cl1.Basic,$$$cl1.Iterator);
        (function($$cellIterator){
            $$$cl1.defineAttr($$cellIterator,'iter$816',function(){return this.iter$816_;},function(iter$817){return this.iter$816_=iter$817;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:CellIterator,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','CellIterator','$at','iter']};});
            $$cellIterator.next=function next(){
                var $$cellIterator=this;
                var iter$818;
                if((iter$818=$$cellIterator.iter$816)!==null){
                    ($$cellIterator.iter$816=iter$818.cdr);
                    return iter$818.car;
                }
                return $$$cl1.getFinished();
            };$$cellIterator.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:['T',{t:$$$cl1.Finished}]},$ps:[],$cont:CellIterator,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','CellIterator','$m','next']};};
        })(CellIterator.$$.prototype);
    }
    return CellIterator;
}
exports.$init$CellIterator=$init$CellIterator;
$init$CellIterator();
exports.$pkg$ans$ceylon$collection=function(){return[$$$cl1.shared()];};
function MutableSet($$targs$$,$$mutableSet){
    $$$cl1.Set($$mutableSet.$$targs$$===undefined?$$targs$$:{Element:$$mutableSet.$$targs$$.Element},$$mutableSet);
    $$$cl1.set_type_args($$mutableSet,$$targs$$);
}
MutableSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:$$$cl1.Set,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[Set]] supporting addition of new elements and removal of \nexisting elements.",80)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.collection','1.0.0').findPackage('ceylon.collection'),MutableList),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.collection','1.0.0').findPackage('ceylon.collection'),MutableMap)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.collection','MutableSet']};};
exports.MutableSet=MutableSet;
function $init$MutableSet(){
    if (MutableSet.$$===undefined){
        $$$cl1.initTypeProtoI(MutableSet,'ceylon.collection::MutableSet',$$$cl1.Set);
        (function($$mutableSet){
            $$mutableSet.add={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:MutableSet,$an:function(){return[$$$cl1.doc("Add an element to this set, returning true if the element\nwas already a member of the set, or false otherwise."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableSet','$m','add']};}};$$mutableSet.addAll={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:MutableSet,$an:function(){return[$$$cl1.doc("Add the given elements to this set, returning true if any \nof the given elements was not already element a member of\nthe set."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableSet','$m','addAll']};}};$$mutableSet.remove={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:MutableSet,$an:function(){return[$$$cl1.doc("Remove an element from this set, returning true if the\nelement was previously a member of the set."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableSet','$m','remove']};}};$$mutableSet.clear={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:MutableSet,$an:function(){return[$$$cl1.doc("Remove every element from this set, leaving an empty set."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.collection','MutableSet','$m','clear']};}};
        })(MutableSet.$$.prototype);
    }
    return MutableSet;
}
exports.$init$MutableSet=$init$MutableSet;
$init$MutableSet();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
