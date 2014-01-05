(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0"],"$mod-name":"ceylon.test","$mod-version":"1.0.0","ceylon.test.internal":{"initExecutorsForTypeLiteral":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"prm","$nm":"executors"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"typeLiteral"},{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"prm","$nm":"filter"},{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"prm","$nm":"comparator"}]],"$mt":"mthd","$m":{"findPackage":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"Package"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"pkgName"}]],"$mt":"mthd","$nm":"findPackage"}},"$nm":"initExecutorsForTypeLiteral"},"ClassTestExecutor":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},"$mt":"prm","$nm":"classDecl"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}]},"$mt":"prm","$nm":"funcDecl"},{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"prm","$nm":"filter"},{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"prm","$nm":"comparator"}],"satisfies":[{"$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$mt":"cls","$m":{"execute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"execute"},"handleTestExecution":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"}],[]],"$mt":"mthd","$m":{"updateWorstState":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$nm":"updateWorstState"}},"$nm":"handleTestExecution","$o":{"wrappedNotifier":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"obj","$m":{"testStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$nm":"description"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testStart"},"testIgnored":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testIgnored"},"testError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testError"},"testFinish":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinish"}},"$nm":"wrappedNotifier"}}},"handleTestIgnore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}],[]],"$mt":"mthd","$nm":"handleTestIgnore"},"verifyTestClass":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}],[]],"$mt":"mthd","$m":{"notifyError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"msg"}]],"$mt":"mthd","$nm":"notifyError"}},"$nm":"verifyTestClass"},"initChildren":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$nm":"initChildren"}},"$at":{"description":{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"description"},"children":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$nm":"children"},"funcDecl":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}]},"$mt":"attr","$nm":"funcDecl"},"comparator":{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"attr","$nm":"comparator"},"classDecl":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},"$mt":"attr","$nm":"classDecl"},"filter":{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"attr","$nm":"filter"}},"$nm":"ClassTestExecutor"},"TestRunResultImpl":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestRunResult"}],"$mt":"cls","$at":{"ignoreCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"ignoreCount"},"failureCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"failureCounter"},"failureCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"failureCount"},"errorCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"errorCount"},"isSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"isSuccess"},"endTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"endTime"},"elapsedTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"elapsedTime"},"startTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"startTime"},"errorCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"errorCounter"},"runCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"runCount"},"ignoreCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"ignoreCounter"},"results":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestResult"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"results"},"runCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"runCounter"},"successCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"successCounter"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"startTimeMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"startTimeMilliseconds"},"endTimeMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"endTimeMilliseconds"},"resultsBuilder":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestResult"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"attr","$nm":"resultsBuilder"},"successCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successCount"}},"$nm":"TestRunResultImpl","$o":{"listener":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"obj","$an":{"shared":[]},"$m":{"testIgnored":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testIgnored"},"testError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testError"},"testRunFinish":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunFinish"},"testRunStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$nm":"description"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunStart"},"testFinish":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinish"},"handleResult":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"wasRun"}]],"$mt":"mthd","$nm":"handleResult"}},"$nm":"listener"}}},"filterExecutors":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"executors"},{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"prm","$nm":"filter"}]],"$mt":"mthd","$nm":"filterExecutors"},"initExecutorForModule":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"prm","$nm":"executors"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"Module"},"$mt":"prm","$nm":"mod"},{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"prm","$nm":"filter"},{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"prm","$nm":"comparator"}]],"$mt":"mthd","$nm":"initExecutorForModule"},"isTestableClass":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},"$mt":"prm","$nm":"classDecl"}]],"$mt":"mthd","$nm":"isTestableClass"},"initExecutorsForSource":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"prm","$nm":"executors"},{"$t":{"$pk":"ceylon.test","$nm":"TestSource"},"$mt":"prm","$nm":"source"},{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"prm","$nm":"filter"},{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"prm","$nm":"comparator"}]],"$mt":"mthd","$nm":"initExecutorsForSource"},"MultipleFailureException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Exception"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$an":{"shared":[]},"$nm":"exceptions"}],"$mt":"cls","$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"message"},"exceptions":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Exception"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"exceptions"}},"$nm":"MultipleFailureException"},"ErrorTestExecutor":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$mt":"prm","$nm":"exception"}],"satisfies":[{"$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$mt":"cls","$m":{"execute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"execute"}},"$at":{"description":{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"description"},"exception":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$mt":"attr","$nm":"exception"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"ErrorTestExecutor"},"initExecutorForPackage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"prm","$nm":"executors"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"Package"},"$mt":"prm","$nm":"pkg"},{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"prm","$nm":"filter"},{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"prm","$nm":"comparator"}]],"$mt":"mthd","$nm":"initExecutorForPackage"},"TestDescriptionImpl":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}]}]},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"declaration"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestDescription"}],"$pk":"ceylon.language","$nm":"Sequential"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"children"}],"satisfies":[{"$pk":"ceylon.test","$nm":"TestDescription"}],"$mt":"cls","$at":{"declaration":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}]}]},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"declaration"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"name"},"children":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestDescription"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"children"}},"$nm":"TestDescriptionImpl"},"sortExecutors":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"Sequential"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"executors"},{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"prm","$nm":"comparator"}]],"$mt":"mthd","$nm":"sortExecutors"},"IgnoreException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"reason"}],"$mt":"cls","$at":{"reason":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"reason"}},"$nm":"IgnoreException"},"TestExecutor":{"$mt":"ifc","$m":{"execute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"execute"}},"$at":{"description":{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"description"}},"$nm":"TestExecutor"},"compareStates":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"prm","$nm":"state1"},{"$t":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"prm","$nm":"state2"}]],"$mt":"mthd","$nm":"compareStates"},"isTestableFunction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},"$mt":"prm","$nm":"funcDecl"}]],"$mt":"mthd","$nm":"isTestableFunction"},"TestRunnerImpl":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestSource"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"sources"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"listeners"},{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"prm","$nm":"filter"},{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"prm","$nm":"comparator"}],"satisfies":[{"$pk":"ceylon.test","$nm":"TestRunner"}],"$mt":"cls","$an":{"shared":[]},"$m":{"initExecutors":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$nm":"initExecutors"},"run":{"$t":{"$pk":"ceylon.test","$nm":"TestRunResult"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"run"}},"$at":{"listeners":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$nm":"listeners"},"description":{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"description"},"executors":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$nm":"executors"},"comparator":{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"attr","$nm":"comparator"},"filter":{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"attr","$nm":"filter"},"sources":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestSource"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$nm":"sources"}},"$nm":"TestRunnerImpl"},"TestResultImpl":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"description"},{"$t":{"$pk":"ceylon.test","$nm":"TestState"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"state"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"}]},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"exception"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"elapsedTime"}],"satisfies":[{"$pk":"ceylon.test","$nm":"TestResult"}],"$mt":"cls","$at":{"description":{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"description"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"exception":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"}]},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"exception"},"state":{"$t":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"state"},"elapsedTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"elapsedTime"}},"$nm":"TestResultImpl"},"FunctionTestExecutor":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},"$mt":"prm","$nm":"funcDecl"}],"satisfies":[{"$pk":"ceylon.test.internal","$nm":"TestExecutor"}],"$mt":"cls","$m":{"verifyBeforeAfterCallbacks":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}],[]],"$mt":"mthd","$m":{"notifyError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"msg"}]],"$mt":"mthd","$nm":"notifyError"}},"$nm":"verifyBeforeAfterCallbacks"},"execute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"execute"},"findCallbacks":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$tp":[{"$nm":"CallbackType"}],"$nm":"findCallbacks"},"handleTestExecution":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}],[]],"$mt":"mthd","$m":{"elapsedTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$nm":"elapsedTime"}},"$nm":"handleTestExecution"},"handleBeforeCallbacks":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}],[]],"$mt":"mthd","$nm":"handleBeforeCallbacks"},"handleAfterCallbacks":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}],[]],"$mt":"mthd","$nm":"handleAfterCallbacks"},"handleTestIgnore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}],[]],"$mt":"mthd","$nm":"handleTestIgnore"},"invokeFunction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},"$mt":"prm","$nm":"fd"}]],"$mt":"mthd","$nm":"invokeFunction"},"invokeTest":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[],[]],"$mt":"mthd","$nm":"invokeTest"},"getInstance":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"mthd","$nm":"getInstance"},"verifyTestMethod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"notifier"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}],[]],"$mt":"mthd","$m":{"notifyError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"msg"}]],"$mt":"mthd","$nm":"notifyError"}},"$nm":"verifyTestMethod"}},"$at":{"description":{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"description"},"funcDecl":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},"$mt":"attr","$nm":"funcDecl"},"instance":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"instance"}},"$nm":"FunctionTestExecutor"},"TestNotifier":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"listeners"}],"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"cls","$m":{"notifyListeners":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"},{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"problematicListeners"}]],"$mt":"mthd","$nm":"notifyListeners"},"testStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$nm":"description"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testStart"},"testIgnored":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testIgnored"},"testError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testError"},"testRunFinish":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunFinish"},"testRunStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$nm":"description"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunStart"},"testFinish":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinish"}},"$at":{"listeners":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$nm":"listeners"}},"$nm":"TestNotifier"}},"ceylon.test":{"TestSource":{"$mt":"als","$an":{"shared":[],"doc":["Alias for program elements from which tests can be run."]},"$alias":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"Module"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"Package"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language.meta.model","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"Class"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language.meta.model","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"FunctionModel"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$nm":"TestSource"},"assertNotNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$an":{"doc":["The value to be checked."]},"$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"doc":["The message describing the problem."]},"$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionException","When _val_ is null."],"doc":["Fails the test if the given _value_ is null."]},"$nm":"assertNotNull"},"ignored":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test state is _ignored_, if it is marked with [[ignore]] annotation."]},"$nm":"ignored"},"test":{"$t":{"$pk":"ceylon.test","$nm":"Test"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Marks an element as being a test. \nOnly nullary functions should be annotated with `test`."]},"$annot":"1","$nm":"test"},"createTestRunner":{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestSource"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$an":{"doc":["The program elements from which tests will be executed."]},"$nm":"sources"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$def":"1","$an":{"doc":["The listeners which will be notified about events during the test run."]},"$nm":"listeners"},{"$t":{"$pk":"ceylon.test","$nm":"TestFilter"},"$mt":"prm","$def":"1","$an":{"doc":["A filter function for determining which tests should be run.\nReturns true if the test should be run. \nThe default filter always returns true."]},"$nm":"filter"},{"$t":{"$pk":"ceylon.test","$nm":"TestComparator"},"$mt":"prm","$def":"1","$an":{"doc":["A comparator used to sort the tests, used tests in certain order.\nThe default comparator runs the tests in the order they are given in \nthe _sources_ parameter."]},"$nm":"comparator"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Create a new [[TestRunner]] for the given test sources and configures it \naccording to the given parameters."]},"$nm":"createTestRunner"},"afterTest":{"$t":{"$pk":"ceylon.test","$nm":"AfterTest"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Marks a function which will be run after each test in its scope.\nOnly nullary functions should be annotated with `afterTest`."]},"$annot":"1","$nm":"afterTest"},"$pkg-shared":"1","Test":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"Test"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["Annotation class for [[test]]."]},"$annot":"1","$nm":"Test"},"fail":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"doc":["The message describing the problem."]},"$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionException","always"],"doc":["Throws an [[AssertionException]] to fail a test."]},"$nm":"fail"},"TestComparator":{"$mt":"als","$an":{"shared":[],"doc":["Alias for functions which compare two tests."]},"$alias":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Comparison"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestDescription"},{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestDescription"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestDescription"},{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestDescription"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$nm":"TestComparator"},"nullSafeString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$nm":"nullSafeString"},"AssertionComparisonException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"AssertionException"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"doc":["The message describing the problem."]},"$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The actual string value."]},"$nm":"actualValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The expected string value."]},"$nm":"expectedValue"}],"$mt":"cls","$an":{"shared":[],"see":["assertEquals","assertNotEquals"],"doc":["Thrown to indicate that two values which should have been \"the \nsame\" (according to some comparison function) were in fact \ndifferent."]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"doc":["The message describing the problem."]},"$nm":"message"},"expectedValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The expected string value."]},"$nm":"expectedValue"},"actualValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The actual string value."]},"$nm":"actualValue"}},"$nm":"AssertionComparisonException"},"assertNotEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$an":{"doc":["The actual value to be checked."]},"$nm":"actual"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$an":{"doc":["The expected value."]},"$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"doc":["The message describing the problem."]},"$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"val1"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"val2"}]],"$mt":"prm","$pt":"f","$def":"1","$an":{"doc":["The compare function."]},"$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionComparisonException","When _actual_ == _expected_."],"doc":["Fails the test if the given values are equal according to the given compare function."]},"$m":{"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"val1"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"val2"}]],"$mt":"mthd","$an":{"doc":["The compare function."]},"$nm":"compare"}},"$nm":"assertNotEquals"},"TestRunResult":{"$mt":"ifc","$an":{"shared":[],"doc":["Represents a summary result of the test run."]},"$at":{"startTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The time in milliseconds when the test run started."]},"$nm":"startTime"},"runCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of executed tests."]},"$nm":"runCount"},"results":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestResult"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The detailed results of each test."]},"$nm":"results"},"ignoreCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of [[ignored]] tests during the test run."]},"$nm":"ignoreCount"},"failureCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of tests that finished with [[failure]]."]},"$nm":"failureCount"},"errorCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of tests that finished with [[error]]."]},"$nm":"errorCount"},"isSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Determine if all executed tests succeeded."]},"$nm":"isSuccess"},"endTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The time in milliseconds when the test run finished."]},"$nm":"endTime"},"successCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of tests that finished [[successfully|success]]."]},"$nm":"successCount"},"elapsedTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The total elapsed time in miliseconds."]},"$nm":"elapsedTime"}},"$nm":"TestRunResult"},"SimpleLoggingListener":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"cls","$an":{"shared":[],"doc":["A [[TestListener]] which prints information about test execution to the standard output."]},"$m":{"testStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$nm":"description"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testStart"},"testError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testError"},"testRunFinish":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunFinish"},"testRunStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$nm":"description"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunStart"},"testFinish":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinish"},"banner":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"title"}]],"$mt":"mthd","$nm":"banner"}},"$nm":"SimpleLoggingListener"},"assertNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$an":{"doc":["The value to be checked."]},"$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"doc":["The message describing the problem."]},"$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionException","When _val_ is not null."],"doc":["Fails the test if the given _value_ is not null."]},"$nm":"assertNull"},"assertThatException":{"$t":{"$pk":"ceylon.test","$nm":"ExceptionAssert"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$an":{"doc":["The checked exception or callback which should throw exception."]},"$nm":"exceptionSource"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionException","When _exceptionSource()_ doesn't throw an Exception"],"doc":["Fails the test if expected exception isn't thrown."]},"$nm":"assertThatException"},"ignore":{"$t":{"$pk":"ceylon.test","$nm":"Ignore"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"doc":["Reason why the test is ignored."]},"$nm":"reason"}]],"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Marks a test or group of tests which should not be executed."]},"$annot":"1","$nm":"ignore"},"assertTrue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"doc":["The condition to be checked."]},"$nm":"condition"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"doc":["The message describing the problem."]},"$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionException","When _condition_ is false."],"doc":["Fails the test if the _condition_ is false."]},"$nm":"assertTrue"},"error":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test state is _error_, if it propagates any exception which is not an [[AssertionException]]."]},"$nm":"error"},"TestFilter":{"$mt":"als","$an":{"shared":[],"doc":["Alias for functions which filter tests. \nShould return true if the given test should be run."]},"$alias":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestDescription"},{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestDescription"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$nm":"TestFilter"},"TestResult":{"$mt":"ifc","$an":{"shared":[],"see":["TestRunResult"],"doc":["Represents a detailed result of the execution of a particular test."]},"$at":{"description":{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The test this is the result for."]},"$nm":"description"},"exception":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The exception thrown during this test, if any."]},"$nm":"exception"},"state":{"$t":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The result state of this test."]},"$nm":"state"},"elapsedTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The total elapsed time in miliseconds."]},"$nm":"elapsedTime"}},"$nm":"TestResult"},"defaultTestComparator":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$nm":"description1"},{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$nm":"description2"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Default test comparator, doesn't change tests order."]},"$nm":"defaultTestComparator"},"BeforeTest":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"BeforeTest"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["Annotation class for [[beforeTest]]."]},"$annot":"1","$nm":"BeforeTest"},"TestRunner":{"$mt":"ifc","$an":{"shared":[],"doc":["Represents a facade for running tests. \nInstances are usually created via the [[createTestRunner]] factory method."]},"$m":{"run":{"$t":{"$pk":"ceylon.test","$nm":"TestRunResult"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Runs all the tests and returns a summary result."]},"$nm":"run"}},"$at":{"description":{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The description of all tests to be run."]},"$nm":"description"}},"$nm":"TestRunner"},"equalsCompare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"obj1"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"obj2"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compares two things. Returns true if both are null or both are non-null and \nare the same according to [[Object.equals]]."]},"$nm":"equalsCompare"},"defaultTestFilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$nm":"description"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Default test filter, always return true."]},"$nm":"defaultTestFilter"},"ExceptionAssert":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$mt":"prm","$an":{"doc":["The exception to be checked."]},"$nm":"exception"}],"$mt":"cls","$an":{"shared":[],"doc":["An assertions applicable to exceptions, see [[assertThatException]]."]},"$m":{"hasMessage":{"$t":{"$pk":"ceylon.test","$nm":"ExceptionAssert"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$an":{"doc":["The expected message or message predicate."]},"$nm":"messageCondition"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Verifies that the actual _exception_ has expected message."]},"$nm":"hasMessage"},"hasNoCause":{"$t":{"$pk":"ceylon.test","$nm":"ExceptionAssert"},"$mt":"mthd","$an":{"shared":[],"doc":["Verifies that the actual _exception_ does not have a cause."]},"$nm":"hasNoCause"},"hasType":{"$t":{"$pk":"ceylon.test","$nm":"ExceptionAssert"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Exception"},{"$mt":"tpm","$pk":"ceylon.test","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"Class"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Exception"},{"$mt":"tpm","$pk":"ceylon.test","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"ClassModel"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Exception"},{"$mt":"tpm","$pk":"ceylon.test","$nm":"Nothing"}],"$pk":"ceylon.language.meta.model","$nm":"ClassModel"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$an":{"doc":["The expected type or type predicate."]},"$nm":"typeCondition"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Verifies that the actual _exception_ has expected type."]},"$nm":"hasType"}},"$at":{"exception":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$mt":"attr","$an":{"doc":["The exception to be checked."]},"$nm":"exception"}},"$nm":"ExceptionAssert"},"TestState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.test","$nm":"success"},{"$pk":"ceylon.test","$nm":"failure"},{"$pk":"ceylon.test","$nm":"error"},{"$pk":"ceylon.test","$nm":"ignored"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"string"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["The result state of test execution."]},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"TestState"},"failure":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test state is _failure_, if it propagates an [[AssertionException]]."]},"$nm":"failure"},"TestListener":{"$mt":"ifc","$an":{"shared":[],"doc":["Represents a listener which will be notified about events that occur during a test run."]},"$m":{"testStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$an":{"doc":["The description of test to be started"]},"$nm":"description"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Called when a test is about to be started."]},"$nm":"testStart"},"testIgnored":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$an":{"doc":["The detailed test result."]},"$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Called when a test will *not* be run, because it is marked with [[ignore]] annotation."]},"$nm":"testIgnored"},"testError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$an":{"doc":["The test result."]},"$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Called when a test will not be run, because some error has occured. \nFor example a invalid test function signature."]},"$nm":"testError"},"testRunFinish":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunResult"},"$mt":"prm","$an":{"doc":["The summary result of the test run."]},"$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Called after all tests have finished."]},"$nm":"testRunFinish"},"testRunStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestDescription"},"$mt":"prm","$an":{"doc":["The description of the tests to be run."]},"$nm":"description"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Called before any tests have been run."]},"$nm":"testRunStart"},"testFinish":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$an":{"doc":["The detailed test result."]},"$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Called when a test has finished, whether the test succeeds or not."]},"$nm":"testFinish"}},"$nm":"TestListener"},"AfterTest":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"AfterTest"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["Annotation class for [[afterTest]]."]},"$annot":"1","$nm":"AfterTest"},"assertEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$an":{"doc":["The actual value to be checked."]},"$nm":"actual"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$an":{"doc":["The expected value."]},"$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"doc":["The message describing the problem."]},"$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"val1"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"val2"}]],"$mt":"prm","$pt":"f","$def":"1","$an":{"doc":["The compare function."]},"$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionComparisonException","When _actual_ != _expected_."],"doc":["Fails the test if the given values are not equal according to the given compare function."]},"$m":{"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"val1"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"val2"}]],"$mt":"mthd","$an":{"doc":["The compare function."]},"$nm":"compare"}},"$nm":"assertEquals"},"assertFalse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"doc":["The condition to be checked."]},"$nm":"condition"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"doc":["The message describing the problem."]},"$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"throws":["AssertionException","When _condition_ is true."],"doc":["Fails the test if the _condition_ is true."]},"$nm":"assertFalse"},"Ignore":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[],"doc":["Reason why the test is ignored."]},"$nm":"reason"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"Ignore"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"}]}],"$pk":"ceylon.language","$nm":"OptionalAnnotation"}],"$mt":"cls","$an":{"annotation":[],"shared":[],"final":[],"doc":["Annotation class for [[ignore]]."]},"$annot":"1","$at":{"reason":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Reason why the test is ignored."]},"$nm":"reason"}},"$nm":"Ignore"},"suite":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"suiteName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"tests"}]],"$mt":"mthd","$an":{"shared":[],"deprecated":["Deprecated API, use function [[createTestRunner]]."]},"$nm":"suite"},"TestDescription":{"$mt":"ifc","$an":{"shared":[],"doc":["Describes a test, or a group of tests, can be arranged in a tree."]},"$at":{"declaration":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"ClassDeclaration"},{"$md":"ceylon.language","$pk":"ceylon.language.meta.declaration","$nm":"FunctionDeclaration"}]}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The program element declaration of this test, if one exists."]},"$nm":"declaration"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The user friendly name of this test."]},"$nm":"name"},"children":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestDescription"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The children of this test, if any."]},"$nm":"children"}},"$nm":"TestDescription"},"success":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test state is _success_, if it complete normally (that is, does not throw an exception)."]},"$nm":"success"},"beforeTest":{"$t":{"$pk":"ceylon.test","$nm":"BeforeTest"},"$mt":"mthd","$an":{"annotation":[],"shared":[],"doc":["Marks an element which should be run before each test in its scope.\nOnly nullary functions should be annotated with `beforeTest`."]},"$annot":"1","$nm":"beforeTest"}},"$mod-bin":"6.0"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
function TestSource(){var tmpvar$2={t:'u', l:[{t:$$$cl1.Module$meta$declaration},{t:$$$cl1.Package$meta$declaration},{t:$$$cl1.ClassDeclaration$meta$declaration},{t:$$$cl1.FunctionDeclaration$meta$declaration},{t:$$$cl1.Class$meta$model,a:{Arguments:{t:$$$cl1.Nothing},Type:{t:$$$cl1.Anything}}},{t:$$$cl1.FunctionModel$meta$model,a:{Arguments:{t:$$$cl1.Nothing},Type:{t:$$$cl1.Anything}}},{t:$$$cl1.String}]};tmpvar$2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl1.doc("Alias for program elements from which tests can be run."),$$$cl1.shared()];},d:['ceylon.test','TestSource']};};return tmpvar$2;}
exports.TestSource=TestSource;
function TestFilter(){var tmpvar$3={t:$$$cl1.Callable,a:{Arguments:{t:'T', l:[{t:TestDescription}]},Return:{t:$$$cl1.Boolean}}};tmpvar$3.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl1.doc("Alias for functions which filter tests. \nShould return true if the given test should be run."),$$$cl1.shared()];},d:['ceylon.test','TestFilter']};};return tmpvar$3;}
exports.TestFilter=TestFilter;
function TestComparator(){var tmpvar$4={t:$$$cl1.Callable,a:{Arguments:{t:'T', l:[{t:TestDescription},{t:TestDescription}]},Return:{t:$$$cl1.Comparison}}};tmpvar$4.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl1.doc("Alias for functions which compare two tests."),$$$cl1.shared()];},d:['ceylon.test','TestComparator']};};return tmpvar$4;}
exports.TestComparator=TestComparator;
function TestRunner($$testRunner){
}
TestRunner.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a facade for running tests. \nInstances are usually created via the [[createTestRunner]] factory method.",114)),$$$cl1.shared()];},d:['ceylon.test','TestRunner']};};
exports.TestRunner=TestRunner;
function $init$TestRunner(){
    if (TestRunner.$$===undefined){
        $$$cl1.initTypeProtoI(TestRunner,'ceylon.test::TestRunner');
        (function($$testRunner){
            $$testRunner.$prop$getDescription={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:TestRunner,$an:function(){return[$$$cl1.doc($$$cl1.String("The description of all tests to be run.",39)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunner','$at','description']};}};
            $$testRunner.run={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestRunResult},$ps:[],$cont:TestRunner,$an:function(){return[$$$cl1.doc("Runs all the tests and returns a summary result."),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunner','$m','run']};}};
        })(TestRunner.$$.prototype);
    }
    return TestRunner;
}
exports.$init$TestRunner=$init$TestRunner;
$init$TestRunner();
var createTestRunner=function (sources$5,listeners$6,filter$7,comparator$8){
    if(listeners$6===undefined){listeners$6=$$$cl1.getEmpty();}
    if(filter$7===undefined){filter$7=defaultTestFilter;}
    if(comparator$8===undefined){comparator$8=defaultTestComparator;}
    return TestRunnerImpl$internal(sources$5,listeners$6,filter$7,comparator$8);
};
createTestRunner.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TestRunner},$ps:[{$nm:'sources',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:TestSource()}},$an:function(){return[$$$cl1.doc("The program elements from which tests will be executed.")];}},{$nm:'listeners',$mt:'prm',$def:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestListener}}},$an:function(){return[$$$cl1.doc("The listeners which will be notified about events during the test run.")];}},{$nm:'filter',$mt:'prm',$def:1,$t:TestFilter(),$an:function(){return[$$$cl1.doc("A filter function for determining which tests should be run.\nReturns true if the test should be run. \nThe default filter always returns true.")];}},{$nm:'comparator',$mt:'prm',$def:1,$t:TestComparator(),$an:function(){return[$$$cl1.doc("A comparator used to sort the tests, used tests in certain order.\nThe default comparator runs the tests in the order they are given in \nthe _sources_ parameter.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Create a new [[TestRunner]] for the given test sources and configures it \naccording to the given parameters.",108)),$$$cl1.shared()];},d:['ceylon.test','createTestRunner']};};
exports.createTestRunner=createTestRunner;
var defaultTestFilter=function (description$9){
    return true;
};
defaultTestFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Default test filter, always return true.",40)),$$$cl1.shared()];},d:['ceylon.test','defaultTestFilter']};};
exports.defaultTestFilter=defaultTestFilter;
var defaultTestComparator=function (description1$10,description2$11){
    return $$$cl1.getEqual();
};
defaultTestComparator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'description1',$mt:'prm',$t:{t:TestDescription},$an:function(){return[];}},{$nm:'description2',$mt:'prm',$t:{t:TestDescription},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Default test comparator, doesn\'t change tests order.",52)),$$$cl1.shared()];},d:['ceylon.test','defaultTestComparator']};};
exports.defaultTestComparator=defaultTestComparator;
function TestRunnerImpl$internal(sources$12, listeners$13, filter$14, comparator$15, $$testRunnerImpl){
    $init$TestRunnerImpl$internal();
    if ($$testRunnerImpl===undefined)$$testRunnerImpl=new TestRunnerImpl$internal.$$;
    $$testRunnerImpl.sources$12_=sources$12;
    $$testRunnerImpl.listeners$13_=listeners$13;
    $$testRunnerImpl.filter$14_=filter$14;
    $$testRunnerImpl.comparator$15_=comparator$15;
    TestRunner($$testRunnerImpl);
    $$testRunnerImpl.executors$16_=$$testRunnerImpl.initExecutors$17();
    $$testRunnerImpl.$prop$getExecutors$16={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$cont:TestRunnerImpl$internal,d:['ceylon.test.internal','TestRunnerImpl','$at','executors']};}};
    $$testRunnerImpl.$prop$getExecutors$16.get=function(){return executors$16};
    $$testRunnerImpl.$prop$getDescription={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:TestRunnerImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunnerImpl','$at','description']};}};
    $$testRunnerImpl.$prop$getDescription.get=function(){return description};
    return $$testRunnerImpl;
}
TestRunnerImpl$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'sources',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:TestSource()}},$an:function(){return[];}},{$nm:'listeners',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:TestListener}}},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$t:TestFilter(),$an:function(){return[];}},{$nm:'comparator',$mt:'prm',$t:TestComparator(),$an:function(){return[];}}],satisfies:[{t:TestRunner}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.test.internal','TestRunnerImpl']};};
exports.TestRunnerImpl$internal=TestRunnerImpl$internal;
function $init$TestRunnerImpl$internal(){
    if (TestRunnerImpl$internal.$$===undefined){
        $$$cl1.initTypeProto(TestRunnerImpl$internal,'ceylon.test.internal::TestRunnerImpl',$$$cl1.Basic,$init$TestRunner());
        (function($$testRunnerImpl){
            $$testRunnerImpl.initExecutors$17=function initExecutors$17(){
                var $$testRunnerImpl=this;
                var executors$18=$$$cl1.SequenceBuilder({Element:{t:TestExecutor$internal}});
                var it$19 = $$testRunnerImpl.sources$12.iterator();
                var source$20;while ((source$20=it$19.next())!==$$$cl1.getFinished()){
                    initExecutorsForSource$internal(executors$18,source$20,$$testRunnerImpl.filter$14,$$testRunnerImpl.comparator$15);
                }
                var filteredExecutors$21=filterExecutors$internal(executors$18.sequence,$$testRunnerImpl.filter$14);
                var sortedExecutors$22=sortExecutors$internal(filteredExecutors$21,$$testRunnerImpl.comparator$15);
                return sortedExecutors$22;
            };$$testRunnerImpl.initExecutors$17.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$ps:[],$cont:TestRunnerImpl$internal,d:['ceylon.test.internal','TestRunnerImpl','$m','initExecutors']};};
            $$$cl1.defineAttr($$testRunnerImpl,'executors$16',function(){return this.executors$16_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$cont:TestRunnerImpl$internal,d:['ceylon.test.internal','TestRunnerImpl','$at','executors']};});
            $$$cl1.defineAttr($$testRunnerImpl,'description',function(){
                var $$testRunnerImpl=this;
                return TestDescriptionImpl$internal($$$cl1.String("root",4),null,(function(){
                    var lst$23=[];
                    var it$24=$$testRunnerImpl.executors$16.iterator();
                    var elem$25;
                    while ((elem$25=it$24.next())!==$$$cl1.getFinished()){
                        lst$23.push(elem$25.description);
                    }
                    return $$$cl1.ArraySequence(lst$23);
                }()));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:TestRunnerImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunnerImpl','$at','description']};});
            $$testRunnerImpl.run=function run(){
                var $$testRunnerImpl=this;
                var runResult$26=TestRunResultImpl$internal();
                var listenersBuilder$27=$$$cl1.SequenceBuilder({Element:{t:TestListener}});
                listenersBuilder$27.append(runResult$26.listener);
                listenersBuilder$27.appendAll($$testRunnerImpl.listeners$13);
                var notifier$28=TestNotifier$internal(listenersBuilder$27.sequence);
                notifier$28.testRunStart($$testRunnerImpl.description);
                (function(){
                    var lst$29=[];
                    var it$30=$$testRunnerImpl.executors$16.iterator();
                    var elem$31;
                    while ((elem$31=it$30.next())!==$$$cl1.getFinished()){
                        lst$29.push({o:elem$31, f:elem$31.execute});
                    }
                    return $$$cl1.JsCallableList(lst$29);
                }())(notifier$28);
                notifier$28.testRunFinish(runResult$26);
                return runResult$26;
            };$$testRunnerImpl.run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TestRunResult},$ps:[],$cont:TestRunnerImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunnerImpl','$m','run']};};
            $$$cl1.defineAttr($$testRunnerImpl,'sources$12',function(){return this.sources$12_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:TestSource()}},$cont:TestRunnerImpl$internal,d:['ceylon.test.internal','TestRunnerImpl','$at','sources']};});
            $$$cl1.defineAttr($$testRunnerImpl,'listeners$13',function(){return this.listeners$13_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestListener}}},$cont:TestRunnerImpl$internal,d:['ceylon.test.internal','TestRunnerImpl','$at','listeners']};});
            $$$cl1.defineAttr($$testRunnerImpl,'filter$14',function(){return this.filter$14_;},undefined,function(){return{mod:$$METAMODEL$$,$t:TestFilter(),$cont:TestRunnerImpl$internal,d:['ceylon.test.internal','TestRunnerImpl','$at','filter']};});
            $$$cl1.defineAttr($$testRunnerImpl,'comparator$15',function(){return this.comparator$15_;},undefined,function(){return{mod:$$METAMODEL$$,$t:TestComparator(),$cont:TestRunnerImpl$internal,d:['ceylon.test.internal','TestRunnerImpl','$at','comparator']};});
        })(TestRunnerImpl$internal.$$.prototype);
    }
    return TestRunnerImpl$internal;
}
exports.$init$TestRunnerImpl$internal=$init$TestRunnerImpl$internal;
$init$TestRunnerImpl$internal();
var isTestableClass$internal=function (classDecl$32){
    return (((!classDecl$32.abstract)&&(!classDecl$32.anonymous))&&(!classDecl$32.annotatedMemberDeclarations({Annotation:{t:Test},Kind:{t:$$$cl1.FunctionDeclaration$meta$declaration}}).empty));
};
isTestableClass$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'classDecl',$mt:'prm',$t:{t:$$$cl1.ClassDeclaration$meta$declaration},$an:function(){return[];}}],d:['ceylon.test.internal','isTestableClass']};};
var isTestableFunction$internal=function (funcDecl$33){
    return (!funcDecl$33.annotations({Annotation:{t:Test}}).empty);
};
isTestableFunction$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'funcDecl',$mt:'prm',$t:{t:$$$cl1.FunctionDeclaration$meta$declaration},$an:function(){return[];}}],d:['ceylon.test.internal','isTestableFunction']};};
function initExecutorForPackage$internal(executors$34,pkg$35,filter$36,comparator$37){
    var it$38 = pkg$35.members({Kind:{t:$$$cl1.ClassDeclaration$meta$declaration}}).iterator();
    var classDecl$39;while ((classDecl$39=it$38.next())!==$$$cl1.getFinished()){
        if(isTestableClass$internal(classDecl$39)){
            executors$34.append(ClassTestExecutor$internal(classDecl$39,null,filter$36,comparator$37));
        }
    }
    var it$40 = pkg$35.members({Kind:{t:$$$cl1.FunctionDeclaration$meta$declaration}}).iterator();
    var funcDecl$41;while ((funcDecl$41=it$40.next())!==$$$cl1.getFinished()){
        if(isTestableFunction$internal(funcDecl$41)){
            executors$34.append(FunctionTestExecutor$internal(funcDecl$41));
        }
    }
};initExecutorForPackage$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'executors',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestExecutor$internal}}},$an:function(){return[];}},{$nm:'pkg',$mt:'prm',$t:{t:$$$cl1.Package$meta$declaration},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$t:TestFilter(),$an:function(){return[];}},{$nm:'comparator',$mt:'prm',$t:TestComparator(),$an:function(){return[];}}],d:['ceylon.test.internal','initExecutorForPackage']};};
function initExecutorForModule$internal(executors$42,mod$43,filter$44,comparator$45){
    var it$46 = mod$43.members.iterator();
    var pgk$47;while ((pgk$47=it$46.next())!==$$$cl1.getFinished()){
        initExecutorForPackage$internal(executors$42,pgk$47,filter$44,comparator$45);
    }
};initExecutorForModule$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'executors',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestExecutor$internal}}},$an:function(){return[];}},{$nm:'mod',$mt:'prm',$t:{t:$$$cl1.Module$meta$declaration},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$t:TestFilter(),$an:function(){return[];}},{$nm:'comparator',$mt:'prm',$t:TestComparator(),$an:function(){return[];}}],d:['ceylon.test.internal','initExecutorForModule']};};
function initExecutorsForTypeLiteral$internal(executors$48,typeLiteral$49,filter$50,comparator$51){
    function findPackage$52(pkgName$53){
        var mod$54=$$$cl1.getModules$meta().list.find($$$cl1.$JsCallable((function (m$55){
            return pkgName$53.startsWith(m$55.name);
        }),[{$nm:'m',$mt:'prm',$t:{t:$$$cl1.Module$meta$declaration},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:$$$cl1.Module$meta$declaration}]},Return:{t:$$$cl1.Boolean}}));
        var pgk$56=(opt$57=mod$54,$$$cl1.JsCallable(opt$57,opt$57!==null?opt$57.findPackage:null))(pkgName$53);
        var opt$57;
        return pgk$56;
    };findPackage$52.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Package$meta$declaration}]},$ps:[{$nm:'pkgName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],d:['ceylon.test.internal','initExecutorsForTypeLiteral','$m','findPackage']};};
    if(typeLiteral$49.startsWith($$$cl1.String("module ",7))){
        var cntvar$58=false;
        var brkvar$60=false;
        var retvar$59=(function(){
            var modName$61=typeLiteral$49.spanFrom((7));
            $prop$getModName$61={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','modName']};}};
            $prop$getModName$61.get=function(){return modName$61};
            var mod$62=$$$cl1.getModules$meta().list.find($$$cl1.$JsCallable((function (m$63){
                return m$63.name.equals(modName$61);
            }),[{$nm:'m',$mt:'prm',$t:{t:$$$cl1.Module$meta$declaration},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:$$$cl1.Module$meta$declaration}]},Return:{t:$$$cl1.Boolean}}));
            $prop$getMod$62={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Module$meta$declaration}]},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','mod']};}};
            $prop$getMod$62.get=function(){return mod$62};
            var mod$64;
            if((mod$64=mod$62)!==null){
                initExecutorForModule$internal(executors$48,mod$64,filter$50,comparator$51);
                return;
            }
        }());if(retvar$59!==undefined){return retvar$59;}
    }
    else {
        if(typeLiteral$49.startsWith($$$cl1.String("package ",8))){
            var pkgName$65=typeLiteral$49.spanFrom((8));
            $prop$getPkgName$65={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','pkgName']};}};
            $prop$getPkgName$65.get=function(){return pkgName$65};
            var pgk$66;
            if((pgk$66=findPackage$52(pkgName$65))!==null){
                initExecutorForPackage$internal(executors$48,pgk$66,filter$50,comparator$51);
                return;
            }
        }else {
            if(typeLiteral$49.startsWith($$$cl1.String("class ",6))){
                var fqn$67=typeLiteral$49.spanFrom((6));
                $prop$getFqn$67={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','fqn']};}};
                $prop$getFqn$67.get=function(){return fqn$67};
                var pkgDelimiter$68=fqn$67.firstInclusion($$$cl1.String("::",2));
                $prop$getPkgDelimiter$68={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','pkgDelimiter']};}};
                $prop$getPkgDelimiter$68.get=function(){return pkgDelimiter$68};
                var pkgDelimiter$69;
                if((pkgDelimiter$69=pkgDelimiter$68)!==null){
                    var pkgName$70=fqn$67.span((0),pkgDelimiter$69.minus((1)));
                    $prop$getPkgName$70={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','pkgName']};}};
                    $prop$getPkgName$70.get=function(){return pkgName$70};
                    var className$71=fqn$67.spanFrom(pkgDelimiter$69.plus((2)));
                    $prop$getClassName$71={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','className']};}};
                    $prop$getClassName$71.get=function(){return className$71};
                    var pkg$72;
                    if((pkg$72=findPackage$52(pkgName$70))!==null){
                        var clazz$73=pkg$72.getMember(className$71,{Kind:{t:$$$cl1.ClassDeclaration$meta$declaration}});
                        $prop$getClazz$73={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.ClassDeclaration$meta$declaration}]},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','clazz']};}};
                        $prop$getClazz$73.get=function(){return clazz$73};
                        var clazz$74;
                        if((clazz$74=clazz$73)!==null){
                            initExecutorsForSource$internal(executors$48,clazz$74,filter$50,comparator$51);
                            return;
                        }
                    }
                }
            }else {
                if(typeLiteral$49.startsWith($$$cl1.String("function ",9))){
                    var fqn$75=typeLiteral$49.spanFrom((9));
                    $prop$getFqn$75={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','fqn']};}};
                    $prop$getFqn$75.get=function(){return fqn$75};
                    var pkgDelimiter$76=fqn$75.firstInclusion($$$cl1.String("::",2));
                    $prop$getPkgDelimiter$76={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','pkgDelimiter']};}};
                    $prop$getPkgDelimiter$76.get=function(){return pkgDelimiter$76};
                    var pkgDelimiter$77;
                    if((pkgDelimiter$77=pkgDelimiter$76)!==null){
                        var pkgName$78=fqn$75.span((0),pkgDelimiter$77.minus((1)));
                        $prop$getPkgName$78={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','pkgName']};}};
                        $prop$getPkgName$78.get=function(){return pkgName$78};
                        var pkg$79;
                        if((pkg$79=findPackage$52(pkgName$78))!==null){
                            var rest$80=fqn$75.spanFrom(pkgDelimiter$77.plus((2)));
                            $prop$getRest$80={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','rest']};}};
                            $prop$getRest$80.get=function(){return rest$80};
                            var memberDelimiter$81=rest$80.firstInclusion($$$cl1.String(".",1));
                            $prop$getMemberDelimiter$81={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','memberDelimiter']};}};
                            $prop$getMemberDelimiter$81.get=function(){return memberDelimiter$81};
                            var memberDelimiter$82;
                            if((memberDelimiter$82=memberDelimiter$81)!==null){
                                var className$83=rest$80.span((0),memberDelimiter$82.minus((1)));
                                $prop$getClassName$83={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','className']};}};
                                $prop$getClassName$83.get=function(){return className$83};
                                var methodName$84=rest$80.spanFrom(memberDelimiter$82.plus((1)));
                                $prop$getMethodName$84={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','methodName']};}};
                                $prop$getMethodName$84.get=function(){return methodName$84};
                                var clazz$85=pkg$79.getMember(className$83,{Kind:{t:$$$cl1.ClassDeclaration$meta$declaration}});
                                $prop$getClazz$85={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.ClassDeclaration$meta$declaration}]},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','clazz']};}};
                                $prop$getClazz$85.get=function(){return clazz$85};
                                var clazz$86;
                                if((clazz$86=clazz$85)!==null){
                                    var method$87=clazz$86.getMemberDeclaration(methodName$84,{Kind:{t:$$$cl1.FunctionDeclaration$meta$declaration}});
                                    $prop$getMethod$87={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.FunctionDeclaration$meta$declaration}]},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','method']};}};
                                    $prop$getMethod$87.get=function(){return method$87};
                                    var method$88;
                                    if((method$88=method$87)!==null){
                                        initExecutorsForSource$internal(executors$48,method$88,filter$50,comparator$51);
                                        return;
                                    }
                                }
                            }else {
                                var fceName$89=rest$80;
                                $prop$getFceName$89={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','fceName']};}};
                                $prop$getFceName$89.get=function(){return fceName$89};
                                var fce$90=pkg$79.getMember(fceName$89,{Kind:{t:$$$cl1.FunctionDeclaration$meta$declaration}});
                                $prop$getFce$90={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.FunctionDeclaration$meta$declaration}]},d:['ceylon.test.internal','initExecutorsForTypeLiteral','$at','fce']};}};
                                $prop$getFce$90.get=function(){return fce$90};
                                var fce$91;
                                if((fce$91=fce$90)!==null){
                                    initExecutorsForSource$internal(executors$48,fce$91,filter$50,comparator$51);
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    executors$48.append(ErrorTestExecutor$internal(typeLiteral$49,$$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("invalid type literal: ",22),typeLiteral$49.string]).string)));
};initExecutorsForTypeLiteral$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'executors',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestExecutor$internal}}},$an:function(){return[];}},{$nm:'typeLiteral',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$t:TestFilter(),$an:function(){return[];}},{$nm:'comparator',$mt:'prm',$t:TestComparator(),$an:function(){return[];}}],d:['ceylon.test.internal','initExecutorsForTypeLiteral']};};
function initExecutorsForSource$internal(executors$92,source$93,filter$94,comparator$95){
    var source$96;
    if($$$cl1.isOfType((source$96=source$93),{t:$$$cl1.Module$meta$declaration})){
        initExecutorForModule$internal(executors$92,source$96,filter$94,comparator$95);
    }else {
        var source$97;
        if($$$cl1.isOfType((source$97=source$93),{t:$$$cl1.Package$meta$declaration})){
            initExecutorForPackage$internal(executors$92,source$97,filter$94,comparator$95);
        }else {
            var source$98;
            if($$$cl1.isOfType((source$98=source$93),{t:$$$cl1.ClassDeclaration$meta$declaration})){
                executors$92.append(ClassTestExecutor$internal(source$98,null,filter$94,comparator$95));
            }else {
                var source$99;
                if($$$cl1.isOfType((source$99=source$93),{t:$$$cl1.Class$meta$model,a:{Arguments:{t:$$$cl1.Empty},Type:{t:$$$cl1.Anything}}})){
                    executors$92.append(ClassTestExecutor$internal(source$99.declaration,null,filter$94,comparator$95));
                }else {
                    var source$100;
                    if($$$cl1.isOfType((source$100=source$93),{t:$$$cl1.FunctionDeclaration$meta$declaration})){
                        if(source$100.toplevel){
                            executors$92.append(FunctionTestExecutor$internal(source$100));
                        }else {
                            //assert at TestRunnerImpl.ceylon (181:12-181:61)
                            var cd$101;
                            if (!($$$cl1.isOfType((cd$101=source$100.container),{t:$$$cl1.ClassDeclaration$meta$declaration}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'is ClassDeclaration cd = source.container\' at TestRunnerImpl.ceylon (181:18-181:60)"),'181:12-181:61','TestRunnerImpl.ceylon'); }
                            executors$92.append(ClassTestExecutor$internal(cd$101,source$100,filter$94,comparator$95));
                        }
                    }else {
                        var source$102;
                        if($$$cl1.isOfType((source$102=source$93),{t:$$$cl1.Function$meta$model,a:{Arguments:{t:$$$cl1.Empty},Type:{t:$$$cl1.Anything}}})){
                            executors$92.append(FunctionTestExecutor$internal(source$102.declaration));
                        }else {
                            var source$103;
                            if($$$cl1.isOfType((source$103=source$93),{t:$$$cl1.Method$meta$model,a:{Arguments:{t:$$$cl1.Empty},Type:{t:$$$cl1.Anything},Container:{t:$$$cl1.Nothing}}})){
                                //assert at TestRunnerImpl.ceylon (189:8-189:69)
                                var cd$104;
                                if (!($$$cl1.isOfType((cd$104=source$103.declaration.container),{t:$$$cl1.ClassDeclaration$meta$declaration}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'is ClassDeclaration cd = source.declaration.container\' at TestRunnerImpl.ceylon (189:14-189:68)"),'189:8-189:69','TestRunnerImpl.ceylon'); }
                                executors$92.append(ClassTestExecutor$internal(cd$104,source$103.declaration,filter$94,comparator$95));
                            }else {
                                var source$105;
                                if($$$cl1.isOfType((source$105=source$93),{t:$$$cl1.String})){
                                    initExecutorsForTypeLiteral$internal(executors$92,source$105,filter$94,comparator$95);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};initExecutorsForSource$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'executors',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestExecutor$internal}}},$an:function(){return[];}},{$nm:'source',$mt:'prm',$t:TestSource(),$an:function(){return[];}},{$nm:'filter',$mt:'prm',$t:TestFilter(),$an:function(){return[];}},{$nm:'comparator',$mt:'prm',$t:TestComparator(),$an:function(){return[];}}],d:['ceylon.test.internal','initExecutorsForSource']};};
function TestDescriptionImpl$internal(name, declaration, children, $$testDescriptionImpl){
    $init$TestDescriptionImpl$internal();
    if ($$testDescriptionImpl===undefined)$$testDescriptionImpl=new TestDescriptionImpl$internal.$$;
    $$testDescriptionImpl.name_=name;
    if(declaration===undefined){declaration=null;}
    $$testDescriptionImpl.declaration_=declaration;
    if(children===undefined){children=$$$cl1.getEmpty();}
    $$testDescriptionImpl.children_=children;
    TestDescription($$testDescriptionImpl);
    $$testDescriptionImpl.$prop$getName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestDescriptionImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestDescriptionImpl','$at','name']};}};
    $$testDescriptionImpl.$prop$getName.get=function(){return name};
    $$testDescriptionImpl.$prop$getDeclaration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:'u', l:[{t:$$$cl1.ClassDeclaration$meta$declaration},{t:$$$cl1.FunctionDeclaration$meta$declaration}]}]},$cont:TestDescriptionImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestDescriptionImpl','$at','declaration']};}};
    $$testDescriptionImpl.$prop$getDeclaration.get=function(){return declaration};
    $$testDescriptionImpl.$prop$getChildren={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestDescription}}},$cont:TestDescriptionImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestDescriptionImpl','$at','children']};}};
    $$testDescriptionImpl.$prop$getChildren.get=function(){return children};
    $$testDescriptionImpl.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestDescriptionImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestDescriptionImpl','$at','string']};}};
    $$testDescriptionImpl.$prop$getString.get=function(){return string};
    return $$testDescriptionImpl;
}
TestDescriptionImpl$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'declaration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:'u', l:[{t:$$$cl1.ClassDeclaration$meta$declaration},{t:$$$cl1.FunctionDeclaration$meta$declaration}]}]},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'children',$mt:'prm',$def:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestDescription}}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}}],satisfies:[{t:TestDescription}],d:['ceylon.test.internal','TestDescriptionImpl']};};
function $init$TestDescriptionImpl$internal(){
    if (TestDescriptionImpl$internal.$$===undefined){
        $$$cl1.initTypeProto(TestDescriptionImpl$internal,'ceylon.test.internal::TestDescriptionImpl',$$$cl1.Basic,$init$TestDescription());
        (function($$testDescriptionImpl){
            $$$cl1.defineAttr($$testDescriptionImpl,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestDescriptionImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestDescriptionImpl','$at','name']};});
            $$$cl1.defineAttr($$testDescriptionImpl,'declaration',function(){return this.declaration_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:'u', l:[{t:$$$cl1.ClassDeclaration$meta$declaration},{t:$$$cl1.FunctionDeclaration$meta$declaration}]}]},$cont:TestDescriptionImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestDescriptionImpl','$at','declaration']};});
            $$$cl1.defineAttr($$testDescriptionImpl,'children',function(){return this.children_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestDescription}}},$cont:TestDescriptionImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestDescriptionImpl','$at','children']};});
            $$$cl1.defineAttr($$testDescriptionImpl,'string',function(){
                var $$testDescriptionImpl=this;
                return $$testDescriptionImpl.name;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestDescriptionImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestDescriptionImpl','$at','string']};});
        })(TestDescriptionImpl$internal.$$.prototype);
    }
    return TestDescriptionImpl$internal;
}
exports.$init$TestDescriptionImpl$internal=$init$TestDescriptionImpl$internal;
$init$TestDescriptionImpl$internal();
function TestNotifier$internal(listeners$106, $$testNotifier){
    $init$TestNotifier$internal();
    if ($$testNotifier===undefined)$$testNotifier=new TestNotifier$internal.$$;
    $$testNotifier.listeners$106_=listeners$106;
    TestListener($$testNotifier);
    return $$testNotifier;
}
TestNotifier$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'listeners',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:TestListener}}},$an:function(){return[];}}],satisfies:[{t:TestListener}],d:['ceylon.test.internal','TestNotifier']};};
function $init$TestNotifier$internal(){
    if (TestNotifier$internal.$$===undefined){
        $$$cl1.initTypeProto(TestNotifier$internal,'ceylon.test.internal::TestNotifier',$$$cl1.Basic,$init$TestListener());
        (function($$testNotifier){
            $$testNotifier.testRunStart=function (description$107){
                var $$testNotifier=this;
                return $$testNotifier.notifyListeners$108($$$cl1.$JsCallable((function (l$109){
                    return l$109.testRunStart(description$107);
                }),[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:TestListener}]},Return:{t:$$$cl1.Anything}}));
            };
            $$testNotifier.testRunStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[];}}],$cont:TestNotifier$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestNotifier','$m','testRunStart']};};
            $$testNotifier.testRunFinish=function (result$110){
                var $$testNotifier=this;
                return $$testNotifier.notifyListeners$108($$$cl1.$JsCallable((function (l$111){
                    return l$111.testRunFinish(result$110);
                }),[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:TestListener}]},Return:{t:$$$cl1.Anything}}));
            };
            $$testNotifier.testRunFinish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestRunResult},$an:function(){return[];}}],$cont:TestNotifier$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestNotifier','$m','testRunFinish']};};
            $$testNotifier.testStart=function (description$112){
                var $$testNotifier=this;
                return $$testNotifier.notifyListeners$108($$$cl1.$JsCallable((function (l$113){
                    return l$113.testStart(description$112);
                }),[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:TestListener}]},Return:{t:$$$cl1.Anything}}));
            };
            $$testNotifier.testStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[];}}],$cont:TestNotifier$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestNotifier','$m','testStart']};};
            $$testNotifier.testFinish=function (result$114){
                var $$testNotifier=this;
                return $$testNotifier.notifyListeners$108($$$cl1.$JsCallable((function (l$115){
                    return l$115.testFinish(result$114);
                }),[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:TestListener}]},Return:{t:$$$cl1.Anything}}));
            };
            $$testNotifier.testFinish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:TestNotifier$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestNotifier','$m','testFinish']};};
            $$testNotifier.testIgnored=function (result$116){
                var $$testNotifier=this;
                return $$testNotifier.notifyListeners$108($$$cl1.$JsCallable((function (l$117){
                    return l$117.testIgnored(result$116);
                }),[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:TestListener}]},Return:{t:$$$cl1.Anything}}));
            };
            $$testNotifier.testIgnored.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:TestNotifier$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestNotifier','$m','testIgnored']};};
            $$testNotifier.testError=function (result$118){
                var $$testNotifier=this;
                return $$testNotifier.notifyListeners$108($$$cl1.$JsCallable((function (l$119){
                    return l$119.testError(result$118);
                }),[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:TestListener}]},Return:{t:$$$cl1.Anything}}));
            };
            $$testNotifier.testError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:TestNotifier$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestNotifier','$m','testError']};};
            $$testNotifier.notifyListeners$108=function notifyListeners$108(handler$120,problematicListeners$121){
                var $$testNotifier=this;
                if(problematicListeners$121===undefined){problematicListeners$121=$$$cl1.getEmpty();}
                var it$122 = $$testNotifier.listeners$106.iterator();
                var listener$123;while ((listener$123=it$122.next())!==$$$cl1.getFinished()){
                    if((!problematicListeners$121.contains(listener$123))){
                        try{
                            handler$120(listener$123);
                        }catch(ex$124){
                            if (ex$124.getT$name === undefined) ex$124=$$$cl1.NativeException(ex$124);
                            if($$$cl1.isOfType(ex$124,{t:$$$cl1.Exception})){
                                var internalDesc$125=TestDescriptionImpl$internal($$$cl1.String("test mechanism",14));
                                $prop$getInternalDesc$125={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestDescriptionImpl$internal},d:['ceylon.test.internal','TestNotifier','$m','notifyListeners','$at','internalDesc']};}};
                                $prop$getInternalDesc$125.get=function(){return internalDesc$125};
                                var internalResult$126=TestResultImpl$internal(internalDesc$125,getError(),ex$124);
                                $prop$getInternalResult$126={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestResultImpl$internal},d:['ceylon.test.internal','TestNotifier','$m','notifyListeners','$at','internalResult']};}};
                                $prop$getInternalResult$126.get=function(){return internalResult$126};
                                $$testNotifier.notifyListeners$108($$$cl1.$JsCallable((function (l$127){
                                    return l$127.testError(internalResult$126);
                                }),[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:TestListener}]},Return:{t:$$$cl1.Anything}}),[listener$123].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:TestListener}}).chain(problematicListeners$121,{Element:{t:TestListener}}));
                            }
                            else{throw ex$124}
                        }
                    }
                }
            };$$testNotifier.notifyListeners$108.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:TestListener}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'problematicListeners',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestListener}}},$an:function(){return[];}}],$cont:TestNotifier$internal,d:['ceylon.test.internal','TestNotifier','$m','notifyListeners']};};
            $$$cl1.defineAttr($$testNotifier,'listeners$106',function(){return this.listeners$106_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestListener}}},$cont:TestNotifier$internal,d:['ceylon.test.internal','TestNotifier','$at','listeners']};});
        })(TestNotifier$internal.$$.prototype);
    }
    return TestNotifier$internal;
}
exports.$init$TestNotifier$internal=$init$TestNotifier$internal;
$init$TestNotifier$internal();
function TestExecutor$internal($$testExecutor){
}
TestExecutor$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,d:['ceylon.test.internal','TestExecutor']};};
function $init$TestExecutor$internal(){
    if (TestExecutor$internal.$$===undefined){
        $$$cl1.initTypeProtoI(TestExecutor$internal,'ceylon.test.internal::TestExecutor');
        (function($$testExecutor){
            $$testExecutor.$prop$getDescription={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:TestExecutor$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test.internal','TestExecutor','$at','description']};}};
            $$testExecutor.execute={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],$cont:TestExecutor$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test.internal','TestExecutor','$m','execute']};}};
        })(TestExecutor$internal.$$.prototype);
    }
    return TestExecutor$internal;
}
exports.$init$TestExecutor$internal=$init$TestExecutor$internal;
$init$TestExecutor$internal();
function ErrorTestExecutor$internal(name$128, exception$129, $$errorTestExecutor){
    $init$ErrorTestExecutor$internal();
    if ($$errorTestExecutor===undefined)$$errorTestExecutor=new ErrorTestExecutor$internal.$$;
    $$errorTestExecutor.name$128_=name$128;
    $$errorTestExecutor.exception$129_=exception$129;
    TestExecutor$internal($$errorTestExecutor);
    $$errorTestExecutor.$prop$getDescription.get=function(){return description};
    return $$errorTestExecutor;
}
ErrorTestExecutor$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'exception',$mt:'prm',$t:{t:$$$cl1.Exception},$an:function(){return[];}}],satisfies:[{t:TestExecutor$internal}],d:['ceylon.test.internal','ErrorTestExecutor']};};
function $init$ErrorTestExecutor$internal(){
    if (ErrorTestExecutor$internal.$$===undefined){
        $$$cl1.initTypeProto(ErrorTestExecutor$internal,'ceylon.test.internal::ErrorTestExecutor',$$$cl1.Basic,$init$TestExecutor$internal());
        (function($$errorTestExecutor){
            $$$cl1.defineAttr($$errorTestExecutor,'description',function(){
                var $$errorTestExecutor=this;
                return TestDescriptionImpl$internal($$errorTestExecutor.name$128);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:ErrorTestExecutor$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','ErrorTestExecutor','$at','description']};});
            $$errorTestExecutor.execute=function (notifier$130){
                var $$errorTestExecutor=this;
                return notifier$130.testError(TestResultImpl$internal($$errorTestExecutor.description,getError(),$$errorTestExecutor.exception$129));
            };
            $$errorTestExecutor.execute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],$cont:ErrorTestExecutor$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','ErrorTestExecutor','$m','execute']};};
            $$$cl1.defineAttr($$errorTestExecutor,'name$128',function(){return this.name$128_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:ErrorTestExecutor$internal,d:['ceylon.test.internal','ErrorTestExecutor','$at','name']};});
            $$$cl1.defineAttr($$errorTestExecutor,'exception$129',function(){return this.exception$129_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Exception},$cont:ErrorTestExecutor$internal,d:['ceylon.test.internal','ErrorTestExecutor','$at','exception']};});
        })(ErrorTestExecutor$internal.$$.prototype);
    }
    return ErrorTestExecutor$internal;
}
exports.$init$ErrorTestExecutor$internal=$init$ErrorTestExecutor$internal;
$init$ErrorTestExecutor$internal();
function ClassTestExecutor$internal(classDecl$131, funcDecl$132, filter$133, comparator$134, $$classTestExecutor){
    $init$ClassTestExecutor$internal();
    if ($$classTestExecutor===undefined)$$classTestExecutor=new ClassTestExecutor$internal.$$;
    $$classTestExecutor.classDecl$131_=classDecl$131;
    $$classTestExecutor.funcDecl$132_=funcDecl$132;
    $$classTestExecutor.filter$133_=filter$133;
    $$classTestExecutor.comparator$134_=comparator$134;
    TestExecutor$internal($$classTestExecutor);
    $$classTestExecutor.children$135_=$$classTestExecutor.initChildren$136();
    $$classTestExecutor.$prop$getChildren$135={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$at','children']};}};
    $$classTestExecutor.$prop$getChildren$135.get=function(){return children$135};
    $$classTestExecutor.$prop$getDescription.get=function(){return description};
    return $$classTestExecutor;
}
ClassTestExecutor$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'classDecl',$mt:'prm',$t:{t:$$$cl1.ClassDeclaration$meta$declaration},$an:function(){return[];}},{$nm:'funcDecl',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.FunctionDeclaration$meta$declaration}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$t:TestFilter(),$an:function(){return[];}},{$nm:'comparator',$mt:'prm',$t:TestComparator(),$an:function(){return[];}}],satisfies:[{t:TestExecutor$internal}],d:['ceylon.test.internal','ClassTestExecutor']};};
function $init$ClassTestExecutor$internal(){
    if (ClassTestExecutor$internal.$$===undefined){
        $$$cl1.initTypeProto(ClassTestExecutor$internal,'ceylon.test.internal::ClassTestExecutor',$$$cl1.Basic,$init$TestExecutor$internal());
        (function($$classTestExecutor){
            $$classTestExecutor.initChildren$136=function initChildren$136(){
                var $$classTestExecutor=this;
                var executors$137=$$$cl1.SequenceBuilder({Element:{t:TestExecutor$internal}});
                var funcDecl$138;
                if((funcDecl$138=$$classTestExecutor.funcDecl$132)!==null){
                    executors$137.append(FunctionTestExecutor$internal(funcDecl$138));
                }else {
                    var it$139 = $$classTestExecutor.classDecl$131.annotatedMemberDeclarations({Annotation:{t:Test},Kind:{t:$$$cl1.FunctionDeclaration$meta$declaration}}).iterator();
                    var funcDecl$140;while ((funcDecl$140=it$139.next())!==$$$cl1.getFinished()){
                        executors$137.append(FunctionTestExecutor$internal(funcDecl$140));
                    }
                }
                var filteredExecutors$141=filterExecutors$internal(executors$137.sequence,$$classTestExecutor.filter$133);
                var sortedExecutors$142=sortExecutors$internal(filteredExecutors$141,$$classTestExecutor.comparator$134);
                return sortedExecutors$142;
            };$$classTestExecutor.initChildren$136.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$ps:[],$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$m','initChildren']};};
            $$$cl1.defineAttr($$classTestExecutor,'children$135',function(){return this.children$135_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$at','children']};});
            $$$cl1.defineAttr($$classTestExecutor,'description',function(){
                var $$classTestExecutor=this;
                return TestDescriptionImpl$internal($$classTestExecutor.classDecl$131.qualifiedName,$$classTestExecutor.classDecl$131,(function(){
                    var lst$143=[];
                    var it$144=$$classTestExecutor.children$135.iterator();
                    var elem$145;
                    while ((elem$145=it$144.next())!==$$$cl1.getFinished()){
                        lst$143.push(elem$145.description);
                    }
                    return $$$cl1.ArraySequence(lst$143);
                }()));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:ClassTestExecutor$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','ClassTestExecutor','$at','description']};});
            $$classTestExecutor.execute=function execute(notifier$146){
                var $$classTestExecutor=this;
                var handler$147=$$$cl1.$JsCallable($$classTestExecutor.verifyTestClass$148(notifier$146,$$$cl1.$JsCallable($$classTestExecutor.handleTestIgnore$149(notifier$146,$$$cl1.$JsCallable($$classTestExecutor.handleTestExecution$150(notifier$146),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}});
                handler$147();
            };$$classTestExecutor.execute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],$cont:ClassTestExecutor$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','ClassTestExecutor','$m','execute']};};
            $$classTestExecutor.verifyTestClass$148=function verifyTestClass$148(notifier$151,handler$152){
                var $$classTestExecutor=this;
                return function(){
                    var notifyError$153=function (msg$154){
                        return notifier$151.testError(TestResultImpl$internal($$classTestExecutor.description,getError(),$$$cl1.Exception(msg$154)));
                    };
                    notifyError$153.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'msg',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],d:['ceylon.test.internal','ClassTestExecutor','$m','verifyTestClass','$m','notifyError']};};
                    if((!$$classTestExecutor.classDecl$131.toplevel)){
                        notifyError$153($$$cl1.String("should be toplevel",18));
                        return;
                    }
                    if($$classTestExecutor.classDecl$131.abstract){
                        notifyError$153($$$cl1.String("should not be abstract",22));
                        return;
                    }
                    if($$classTestExecutor.classDecl$131.anonymous){
                        notifyError$153($$$cl1.String("should not be anonymous",23));
                        return;
                    }
                    if((!$$classTestExecutor.classDecl$131.parameterDeclarations.empty)){
                        notifyError$153($$$cl1.String("should have no parameters",25));
                        return;
                    }
                    if((!$$classTestExecutor.classDecl$131.typeParameterDeclarations.empty)){
                        notifyError$153($$$cl1.String("should have no type parameters",30));
                        return;
                    }
                    if($$classTestExecutor.children$135.empty){
                        notifyError$153($$$cl1.String("should have testable methods",28));
                        return;
                    }
                    handler$152();
                }
            };$$classTestExecutor.verifyTestClass$148.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$m','verifyTestClass']};};
            $$classTestExecutor.handleTestIgnore$149=function handleTestIgnore$149(notifier$155,handler$156){
                var $$classTestExecutor=this;
                return function(){
                    var ignoreAnnotations$157=$$classTestExecutor.classDecl$131.annotations({Annotation:{t:Ignore}});
                    if((!ignoreAnnotations$157.empty)){
                        notifier$155.testIgnored(TestResultImpl$internal($$classTestExecutor.description,getIgnored(),IgnoreException$internal((opt$158=(opt$159=ignoreAnnotations$157.$get((0)),opt$159!==null?opt$159.reason:null),opt$158!==null?opt$158:$$$cl1.String("",0)))));
                        var opt$158,opt$159;
                        return;
                    }
                    handler$156();
                }
            };$$classTestExecutor.handleTestIgnore$149.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$m','handleTestIgnore']};};
            $$classTestExecutor.handleTestExecution$150=function handleTestExecution$150(notifier$160){
                var $$classTestExecutor=this;
                return function(){
                    var worstState$161=getIgnored();
                    function setWorstState$161(worstState$162){return worstState$161=worstState$162;};
                    function updateWorstState$163(result$164){
                        if(compareStates$internal(worstState$161,result$164.state).equals($$$cl1.getSmaller())){
                            worstState$161=result$164.state;
                        }
                    };updateWorstState$163.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],d:['ceylon.test.internal','ClassTestExecutor','$m','handleTestExecution','$m','updateWorstState']};};
                    function wrappedNotifier$165(){
                        var $$wrappedNotifier$165=new wrappedNotifier$165.$$;
                        TestListener($$wrappedNotifier$165);
                        return $$wrappedNotifier$165;
                    };wrappedNotifier$165.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:TestListener}],d:['ceylon.test.internal','ClassTestExecutor','$m','handleTestExecution','$o','wrappedNotifier']};};
                    function $init$wrappedNotifier$165(){
                        if (wrappedNotifier$165.$$===undefined){
                            $$$cl1.initTypeProto(wrappedNotifier$165,'ceylon.test.internal::ClassTestExecutor.handleTestExecution.wrappedNotifier',$$$cl1.Basic,$init$TestListener());
                            (function($$wrappedNotifier$165){
                                $$wrappedNotifier$165.testStart=function testStart(description$166){
                                    var $$wrappedNotifier$165=this;
                                    notifier$160.testStart(description$166);
                                };$$wrappedNotifier$165.testStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[];}}],$cont:wrappedNotifier$165,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','ClassTestExecutor','$m','handleTestExecution','$o','wrappedNotifier','$m','testStart']};};
                                $$wrappedNotifier$165.testFinish=function testFinish(result$167){
                                    var $$wrappedNotifier$165=this;
                                    updateWorstState$163(result$167);
                                    notifier$160.testFinish(result$167);
                                };$$wrappedNotifier$165.testFinish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:wrappedNotifier$165,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','ClassTestExecutor','$m','handleTestExecution','$o','wrappedNotifier','$m','testFinish']};};
                                $$wrappedNotifier$165.testIgnored=function testIgnored(result$168){
                                    var $$wrappedNotifier$165=this;
                                    updateWorstState$163(result$168);
                                    notifier$160.testIgnored(result$168);
                                };$$wrappedNotifier$165.testIgnored.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:wrappedNotifier$165,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','ClassTestExecutor','$m','handleTestExecution','$o','wrappedNotifier','$m','testIgnored']};};
                                $$wrappedNotifier$165.testError=function testError(result$169){
                                    var $$wrappedNotifier$165=this;
                                    updateWorstState$163(result$169);
                                    notifier$160.testError(result$169);
                                };$$wrappedNotifier$165.testError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:wrappedNotifier$165,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','ClassTestExecutor','$m','handleTestExecution','$o','wrappedNotifier','$m','testError']};};
                            })(wrappedNotifier$165.$$.prototype);
                        }
                        return wrappedNotifier$165;
                    }
                    $init$wrappedNotifier$165();
                    var wrappedNotifier$170;
                    function getWrappedNotifier$170(){
                        if (wrappedNotifier$170===undefined){wrappedNotifier$170=$init$wrappedNotifier$165()();wrappedNotifier$170.$$metamodel$$=getWrappedNotifier$170.$$metamodel$$;}
                        return wrappedNotifier$170;
                    }
                    getWrappedNotifier$170.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:wrappedNotifier$165},d:['ceylon.test.internal','ClassTestExecutor','$m','handleTestExecution','$o','wrappedNotifier']};};
                    $prop$getWrappedNotifier$170={get:getWrappedNotifier$170,$$metamodel$$:getWrappedNotifier$170.$$metamodel$$};
                    notifier$160.testStart($$classTestExecutor.description);
                    var startTime$171=$$$cl1.getSystem().milliseconds;
                    (function(){
                        var lst$172=[];
                        var it$173=$$classTestExecutor.children$135.iterator();
                        var elem$174;
                        while ((elem$174=it$173.next())!==$$$cl1.getFinished()){
                            lst$172.push({o:elem$174, f:elem$174.execute});
                        }
                        return $$$cl1.JsCallableList(lst$172);
                    }())(getWrappedNotifier$170());
                    var endTime$175=$$$cl1.getSystem().milliseconds;
                    notifier$160.testFinish(TestResultImpl$internal($$classTestExecutor.description,worstState$161,null,endTime$175.minus(startTime$171)));
                }
            };$$classTestExecutor.handleTestExecution$150.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$m','handleTestExecution']};};
            $$$cl1.defineAttr($$classTestExecutor,'classDecl$131',function(){return this.classDecl$131_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.ClassDeclaration$meta$declaration},$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$at','classDecl']};});
            $$$cl1.defineAttr($$classTestExecutor,'funcDecl$132',function(){return this.funcDecl$132_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.FunctionDeclaration$meta$declaration}]},$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$at','funcDecl']};});
            $$$cl1.defineAttr($$classTestExecutor,'filter$133',function(){return this.filter$133_;},undefined,function(){return{mod:$$METAMODEL$$,$t:TestFilter(),$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$at','filter']};});
            $$$cl1.defineAttr($$classTestExecutor,'comparator$134',function(){return this.comparator$134_;},undefined,function(){return{mod:$$METAMODEL$$,$t:TestComparator(),$cont:ClassTestExecutor$internal,d:['ceylon.test.internal','ClassTestExecutor','$at','comparator']};});
        })(ClassTestExecutor$internal.$$.prototype);
    }
    return ClassTestExecutor$internal;
}
exports.$init$ClassTestExecutor$internal=$init$ClassTestExecutor$internal;
$init$ClassTestExecutor$internal();
function FunctionTestExecutor$internal(funcDecl$176, $$functionTestExecutor){
    $init$FunctionTestExecutor$internal();
    if ($$functionTestExecutor===undefined)$$functionTestExecutor=new FunctionTestExecutor$internal.$$;
    $$functionTestExecutor.funcDecl$176_=funcDecl$176;
    TestExecutor$internal($$functionTestExecutor);
    $$functionTestExecutor.instance$177_=null;
    $$functionTestExecutor.$prop$getInstance$177={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$cont:FunctionTestExecutor$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','FunctionTestExecutor','$at','instance']};}};
    $$functionTestExecutor.$prop$getInstance$177.get=function(){return instance$177};
    $$functionTestExecutor.$prop$getDescription.get=function(){return description};
    return $$functionTestExecutor;
}
FunctionTestExecutor$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'funcDecl',$mt:'prm',$t:{t:$$$cl1.FunctionDeclaration$meta$declaration},$an:function(){return[];}}],satisfies:[{t:TestExecutor$internal}],d:['ceylon.test.internal','FunctionTestExecutor']};};
function $init$FunctionTestExecutor$internal(){
    if (FunctionTestExecutor$internal.$$===undefined){
        $$$cl1.initTypeProto(FunctionTestExecutor$internal,'ceylon.test.internal::FunctionTestExecutor',$$$cl1.Basic,$init$TestExecutor$internal());
        (function($$functionTestExecutor){
            $$$cl1.defineAttr($$functionTestExecutor,'instance$177',function(){return this.instance$177_;},function(instance$178){return this.instance$177_=instance$178;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$cont:FunctionTestExecutor$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','FunctionTestExecutor','$at','instance']};});
            $$functionTestExecutor.getInstance$179=function getInstance$179(){
                var $$functionTestExecutor=this;
                var i$180;
                if((i$180=$$functionTestExecutor.instance$177)!==null){
                    return i$180;
                }else {
                    //assert at TestExecutor.ceylon (163:12-163:70)
                    var classDecl$181;
                    if (!($$$cl1.isOfType((classDecl$181=$$functionTestExecutor.funcDecl$176.container),{t:$$$cl1.ClassDeclaration$meta$declaration}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'is ClassDeclaration classDecl = funcDecl.container\' at TestExecutor.ceylon (163:18-163:69)"),'163:12-163:70','TestExecutor.ceylon'); }
                    //assert at TestExecutor.ceylon (164:12-164:74)
                    var clazz$182;
                    if (!($$$cl1.isOfType((clazz$182=classDecl$181.$apply(undefined,{Type:{t:$$$cl1.Object}})),{t:$$$cl1.Class$meta$model,a:{Arguments:{t:$$$cl1.Empty},Type:{t:$$$cl1.Object}}}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'is Class<Object, []> clazz = classDecl.apply<Object>()\' at TestExecutor.ceylon (164:18-164:73)"),'164:12-164:74','TestExecutor.ceylon'); }
                    var i$183=clazz$182.tipo();
                    $prop$getI$183={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Object},d:['ceylon.test.internal','FunctionTestExecutor','$m','getInstance','$at','i']};}};
                    $prop$getI$183.get=function(){return i$183};
                    $$functionTestExecutor.instance$177=i$183;
                    return i$183;
                }
            };$$functionTestExecutor.getInstance$179.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Object},$ps:[],$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$m','getInstance']};};
            $$$cl1.defineAttr($$functionTestExecutor,'description',function(){
                var $$functionTestExecutor=this;
                return TestDescriptionImpl$internal($$functionTestExecutor.funcDecl$176.qualifiedName,$$functionTestExecutor.funcDecl$176);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:FunctionTestExecutor$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','FunctionTestExecutor','$at','description']};});
            $$functionTestExecutor.execute=function execute(notifier$184){
                var $$functionTestExecutor=this;
                var handler$185=$$$cl1.$JsCallable($$functionTestExecutor.verifyTestMethod$186(notifier$184,$$$cl1.$JsCallable($$functionTestExecutor.verifyBeforeAfterCallbacks$187(notifier$184,$$$cl1.$JsCallable($$functionTestExecutor.handleTestIgnore$188(notifier$184,$$$cl1.$JsCallable($$functionTestExecutor.handleTestExecution$189(notifier$184,$$$cl1.$JsCallable($$functionTestExecutor.handleAfterCallbacks$190($$$cl1.$JsCallable($$functionTestExecutor.handleBeforeCallbacks$191($$$cl1.$JsCallable($$functionTestExecutor.invokeTest$192(),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}});
                handler$185();
            };$$functionTestExecutor.execute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],$cont:FunctionTestExecutor$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','FunctionTestExecutor','$m','execute']};};
            $$functionTestExecutor.verifyTestMethod$186=function verifyTestMethod$186(notifier$193,handler$194){
                var $$functionTestExecutor=this;
                return function(){
                    var notifyError$195=function (msg$196){
                        return notifier$193.testError(TestResultImpl$internal($$functionTestExecutor.description,getError(),$$$cl1.Exception(msg$196)));
                    };
                    notifyError$195.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'msg',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],d:['ceylon.test.internal','FunctionTestExecutor','$m','verifyTestMethod','$m','notifyError']};};
                    if($$functionTestExecutor.funcDecl$176.annotations({Annotation:{t:Test}}).empty){
                        notifyError$195($$$cl1.String("should be annotated with test",29));
                        return;
                    }
                    if((!$$functionTestExecutor.funcDecl$176.parameterDeclarations.empty)){
                        notifyError$195($$$cl1.String("should have no parameters",25));
                        return;
                    }
                    if((!$$functionTestExecutor.funcDecl$176.typeParameterDeclarations.empty)){
                        notifyError$195($$$cl1.String("should have no type parameters",30));
                        return;
                    }
                    var openType$197;
                    if($$$cl1.isOfType((openType$197=$$functionTestExecutor.funcDecl$176.openType),{t:$$$cl1.OpenClassOrInterfaceType$meta$declaration})&&(!openType$197.declaration.equals($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','1.0.0').findPackage('ceylon.language'),$$$cl1.Anything)))){
                        notifyError$195($$$cl1.String("should be void",14));
                        return;
                    }
                    handler$194();
                }
            };$$functionTestExecutor.verifyTestMethod$186.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$m','verifyTestMethod']};};
            $$functionTestExecutor.verifyBeforeAfterCallbacks$187=function verifyBeforeAfterCallbacks$187(notifier$198,handler$199){
                var $$functionTestExecutor=this;
                return function(){
                    var notifyError$200=function (msg$201){
                        return notifier$198.testError(TestResultImpl$internal($$functionTestExecutor.description,getError(),$$$cl1.Exception(msg$201)));
                    };
                    notifyError$200.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'msg',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],d:['ceylon.test.internal','FunctionTestExecutor','$m','verifyBeforeAfterCallbacks','$m','notifyError']};};
                    var callbacks$202=$$functionTestExecutor.findCallbacks$203({CallbackType:{t:'u', l:[{t:BeforeTest},{t:AfterTest}]}});
                    var it$204 = callbacks$202.iterator();
                    var callback$205;while ((callback$205=it$204.next())!==$$$cl1.getFinished()){
                        if((!callback$205.parameterDeclarations.empty)){
                            notifyError$200($$$cl1.StringBuilder().appendAll([$$$cl1.String("callback ",9),callback$205.qualifiedName.string,$$$cl1.String(" should have no parameters",26)]).string);
                            return;
                        }
                        if((!callback$205.typeParameterDeclarations.empty)){
                            notifyError$200($$$cl1.StringBuilder().appendAll([$$$cl1.String("callback ",9),callback$205.qualifiedName.string,$$$cl1.String(" should have no type parameters",31)]).string);
                            return;
                        }
                        var openType$206;
                        if($$$cl1.isOfType((openType$206=callback$205.openType),{t:$$$cl1.OpenClassOrInterfaceType$meta$declaration})&&(!openType$206.declaration.equals($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','1.0.0').findPackage('ceylon.language'),$$$cl1.Anything)))){
                            notifyError$200($$$cl1.StringBuilder().appendAll([$$$cl1.String("callback ",9),callback$205.qualifiedName.string,$$$cl1.String(" should be void",15)]).string);
                            return;
                        }
                    }
                    handler$199();
                }
            };$$functionTestExecutor.verifyBeforeAfterCallbacks$187.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$m','verifyBeforeAfterCallbacks']};};
            $$functionTestExecutor.handleTestIgnore$188=function handleTestIgnore$188(notifier$207,handler$208){
                var $$functionTestExecutor=this;
                return function(){
                    var ignoreAnnotations$209=$$functionTestExecutor.funcDecl$176.annotations({Annotation:{t:Ignore}});
                    if((!ignoreAnnotations$209.empty)){
                        notifier$207.testIgnored(TestResultImpl$internal($$functionTestExecutor.description,getIgnored(),IgnoreException$internal((opt$210=(opt$211=ignoreAnnotations$209.$get((0)),opt$211!==null?opt$211.reason:null),opt$210!==null?opt$210:$$$cl1.String("",0)))));
                        var opt$210,opt$211;
                        return;
                    }
                    handler$208();
                }
            };$$functionTestExecutor.handleTestIgnore$188.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$m','handleTestIgnore']};};
            $$functionTestExecutor.handleBeforeCallbacks$191=function handleBeforeCallbacks$191(handler$212){
                var $$functionTestExecutor=this;
                return function(){
                    var callbacks$213=$$functionTestExecutor.findCallbacks$203({CallbackType:{t:BeforeTest}});
                    var it$214 = callbacks$213.iterator();
                    var callback$215;while ((callback$215=it$214.next())!==$$$cl1.getFinished()){
                        $$functionTestExecutor.invokeFunction$216(callback$215);
                    }
                    handler$212();
                }
            };$$functionTestExecutor.handleBeforeCallbacks$191.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$m','handleBeforeCallbacks']};};
            $$functionTestExecutor.handleAfterCallbacks$190=function handleAfterCallbacks$190(handler$217){
                var $$functionTestExecutor=this;
                return function(){
                    var exceptionsBuilder$218=$$$cl1.SequenceBuilder({Element:{t:$$$cl1.Exception}});
                    try{
                        handler$217();
                    }catch(ex$219){
                        if (ex$219.getT$name === undefined) ex$219=$$$cl1.NativeException(ex$219);
                        if($$$cl1.isOfType(ex$219,{t:$$$cl1.Exception})){
                            exceptionsBuilder$218.append(ex$219);
                        }
                        else{throw ex$219}
                    }
                    finally{
                        var callbacks$220=$$functionTestExecutor.findCallbacks$203({CallbackType:{t:AfterTest}}).reversed;
                        $prop$getCallbacks$220={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.FunctionDeclaration$meta$declaration}}},d:['ceylon.test.internal','FunctionTestExecutor','$m','handleAfterCallbacks','$at','callbacks']};}};
                        $prop$getCallbacks$220.get=function(){return callbacks$220};
                        var it$221 = callbacks$220.iterator();
                        var callback$222;while ((callback$222=it$221.next())!==$$$cl1.getFinished()){
                            try{
                                $$functionTestExecutor.invokeFunction$216(callback$222);
                            }catch(ex$223){
                                if (ex$223.getT$name === undefined) ex$223=$$$cl1.NativeException(ex$223);
                                if($$$cl1.isOfType(ex$223,{t:$$$cl1.Exception})){
                                    exceptionsBuilder$218.append(ex$223);
                                }
                                else{throw ex$223}
                            }
                        }
                    }
                    var exceptions$224=exceptionsBuilder$218.sequence;
                    if(exceptions$224.size.equals((0))){}else {
                        if(exceptions$224.size.equals((1))){
                            //assert at TestExecutor.ceylon (272:12-272:47)
                            var e$225;
                            if (!((e$225=exceptions$224.first)!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists e = exceptions.first\' at TestExecutor.ceylon (272:18-272:46)"),'272:12-272:47','TestExecutor.ceylon'); }
                            throw $$$cl1.wrapexc(e$225,'273:12-273:19','ceylon/test/internal/TestExecutor.ceylon');
                        }else {
                            throw $$$cl1.wrapexc(MultipleFailureException$internal(exceptions$224),'276:12-276:54','ceylon/test/internal/TestExecutor.ceylon');
                        }
                    }
                }
            };$$functionTestExecutor.handleAfterCallbacks$190.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$m','handleAfterCallbacks']};};
            $$functionTestExecutor.handleTestExecution$189=function handleTestExecution$189(notifier$226,handler$227){
                var $$functionTestExecutor=this;
                return function(){
                    var startTime$228=$$$cl1.getSystem().milliseconds;
                    var elapsedTime$229=function (){
                        return $$$cl1.getSystem().milliseconds.minus(startTime$228);
                    };
                    elapsedTime$229.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],d:['ceylon.test.internal','FunctionTestExecutor','$m','handleTestExecution','$m','elapsedTime']};};
                    try{
                        notifier$226.testStart($$functionTestExecutor.description);
                        handler$227();
                        notifier$226.testFinish(TestResultImpl$internal($$functionTestExecutor.description,getSuccess(),null,elapsedTime$229()));
                    }catch(ex$230){
                        if (ex$230.getT$name === undefined) ex$230=$$$cl1.NativeException(ex$230);
                        if($$$cl1.isOfType(ex$230,{t:$$$cl1.Exception})){
                            if($$$cl1.isOfType(ex$230,{t:$$$cl1.AssertionException})){
                                notifier$226.testFinish(TestResultImpl$internal($$functionTestExecutor.description,getFailure(),ex$230,elapsedTime$229()));
                            }else {
                                notifier$226.testFinish(TestResultImpl$internal($$functionTestExecutor.description,getError(),ex$230,elapsedTime$229()));
                            }
                        }
                        else{throw ex$230}
                    }
                }
            };$$functionTestExecutor.handleTestExecution$189.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'notifier',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$m','handleTestExecution']};};
            $$functionTestExecutor.invokeTest$192=function invokeTest$192(){
                var $$functionTestExecutor=this;
                return function(){
                    $$functionTestExecutor.invokeFunction$216($$functionTestExecutor.funcDecl$176);
                }
            };$$functionTestExecutor.invokeTest$192.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$m','invokeTest']};};
            $$functionTestExecutor.findCallbacks$203=function findCallbacks$203($$$mptypes){
                var $$functionTestExecutor=this;
                var callbacks$231=$$$cl1.SequenceBuilder({Element:{t:$$$cl1.FunctionDeclaration$meta$declaration}});
                var parent$232=$$functionTestExecutor.funcDecl$176.container;
                var parent$233;
                if($$$cl1.isOfType((parent$233=parent$232),{t:$$$cl1.ClassDeclaration$meta$declaration})){
                    callbacks$231.appendAll(parent$233.containingPackage.annotatedMembers({Annotation:$$$mptypes.CallbackType,Kind:{t:$$$cl1.FunctionDeclaration$meta$declaration}}));
                    var extendedType$234=parent$233.extendedType;
                    function setExtendedType$234(extendedType$235){return extendedType$234=extendedType$235;};
                    $prop$getExtendedType$234={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.OpenClassType$meta$declaration}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','FunctionTestExecutor','$m','findCallbacks','$at','extendedType']};}};
                    $prop$getExtendedType$234.get=function(){return extendedType$234};
                    $prop$getExtendedType$234.set=setExtendedType$234;
                    if (setExtendedType$234.$$metamodel$$===undefined)setExtendedType$234.$$metamodel$$=$prop$getExtendedType$234.$$metamodel$$;
                    var extendedDeclaration$236;
                    while((extendedDeclaration$236=(opt$237=extendedType$234,opt$237!==null?opt$237.declaration:null))!==null){
                        callbacks$231.appendAll(extendedDeclaration$236.annotatedDeclaredMemberDeclarations({Annotation:$$$mptypes.CallbackType,Kind:{t:$$$cl1.FunctionDeclaration$meta$declaration}}));
                        extendedType$234=extendedDeclaration$236.extendedType;
                    }
                    var opt$237;
                    callbacks$231.appendAll(parent$233.annotatedDeclaredMemberDeclarations({Annotation:$$$mptypes.CallbackType,Kind:{t:$$$cl1.FunctionDeclaration$meta$declaration}}));
                }else {
                    var parent$238;
                    if($$$cl1.isOfType((parent$238=parent$232),{t:$$$cl1.Package$meta$declaration})){
                        callbacks$231.appendAll(parent$238.annotatedMembers({Annotation:$$$mptypes.CallbackType,Kind:{t:$$$cl1.FunctionDeclaration$meta$declaration}}));
                    }
                }
                return callbacks$231.sequence;
            };$$functionTestExecutor.findCallbacks$203.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.FunctionDeclaration$meta$declaration}}},$ps:[],$cont:FunctionTestExecutor$internal,$tp:{CallbackType:{}},d:['ceylon.test.internal','FunctionTestExecutor','$m','findCallbacks']};};
            $$functionTestExecutor.invokeFunction$216=function invokeFunction$216(fd$239){
                var $$functionTestExecutor=this;
                if(fd$239.toplevel){
                    fd$239.invoke();
                }else {
                    fd$239.memberInvoke($$functionTestExecutor.getInstance$179());
                }
            };$$functionTestExecutor.invokeFunction$216.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'fd',$mt:'prm',$t:{t:$$$cl1.FunctionDeclaration$meta$declaration},$an:function(){return[];}}],$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$m','invokeFunction']};};
            $$$cl1.defineAttr($$functionTestExecutor,'funcDecl$176',function(){return this.funcDecl$176_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.FunctionDeclaration$meta$declaration},$cont:FunctionTestExecutor$internal,d:['ceylon.test.internal','FunctionTestExecutor','$at','funcDecl']};});
        })(FunctionTestExecutor$internal.$$.prototype);
    }
    return FunctionTestExecutor$internal;
}
exports.$init$FunctionTestExecutor$internal=$init$FunctionTestExecutor$internal;
$init$FunctionTestExecutor$internal();
function IgnoreException$internal(reason, $$ignoreException){
    $init$IgnoreException$internal();
    if ($$ignoreException===undefined)$$ignoreException=new IgnoreException$internal.$$;
    $$ignoreException.reason_=reason;
    $$$cl1.Exception($$ignoreException.reason,undefined,$$ignoreException);
    return $$ignoreException;
}
IgnoreException$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},$ps:[{$nm:'reason',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];}}],d:['ceylon.test.internal','IgnoreException']};};
function $init$IgnoreException$internal(){
    if (IgnoreException$internal.$$===undefined){
        $$$cl1.initTypeProto(IgnoreException$internal,'ceylon.test.internal::IgnoreException',$$$cl1.Exception);
        (function($$ignoreException){
            $$$cl1.defineAttr($$ignoreException,'reason',function(){return this.reason_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:IgnoreException$internal,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test.internal','IgnoreException','$at','reason']};});
        })(IgnoreException$internal.$$.prototype);
    }
    return IgnoreException$internal;
}
exports.$init$IgnoreException$internal=$init$IgnoreException$internal;
$init$IgnoreException$internal();
function MultipleFailureException$internal(exceptions, $$multipleFailureException){
    $init$MultipleFailureException$internal();
    if ($$multipleFailureException===undefined)$$multipleFailureException=new MultipleFailureException$internal.$$;
    $$multipleFailureException.exceptions_=exceptions;
    $$$cl1.Exception(undefined,undefined,$$multipleFailureException);
    return $$multipleFailureException;
}
MultipleFailureException$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},$ps:[{$nm:'exceptions',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Exception}}},$an:function(){return[$$$cl1.shared()];}}],d:['ceylon.test.internal','MultipleFailureException']};};
function $init$MultipleFailureException$internal(){
    if (MultipleFailureException$internal.$$===undefined){
        $$$cl1.initTypeProto(MultipleFailureException$internal,'ceylon.test.internal::MultipleFailureException',$$$cl1.Exception);
        (function($$multipleFailureException){
            $$$cl1.defineAttr($$multipleFailureException,'message',function(){
                var $$multipleFailureException=this;
                var message$240=$$$cl1.StringBuilder();
                $prop$getMessage$240={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.test.internal','MultipleFailureException','$at','message','$at','message']};}};
                $prop$getMessage$240.get=function(){return message$240};
                message$240.append($$$cl1.StringBuilder().appendAll([$$$cl1.String("There were ",11),$$multipleFailureException.exceptions.size.string,$$$cl1.String(" exceptions:",12)]).string);
                var it$241 = $$multipleFailureException.exceptions.iterator();
                var e$242;while ((e$242=it$241.next())!==$$$cl1.getFinished()){
                    message$240.appendNewline();
                    message$240.append($$$cl1.String("    ",4));
                    message$240.append($$$cl1.type$meta(e$242,{Type:{t:$$$cl1.Exception}}).declaration.qualifiedName);
                    message$240.append($$$cl1.String("(",1));
                    message$240.append(e$242.message);
                    message$240.append($$$cl1.String(")",1));
                }
                return message$240.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:MultipleFailureException$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','MultipleFailureException','$at','message']};});$$$cl1.defineAttr($$multipleFailureException,'exceptions',function(){return this.exceptions_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Exception}}},$cont:MultipleFailureException$internal,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test.internal','MultipleFailureException','$at','exceptions']};});
        })(MultipleFailureException$internal.$$.prototype);
    }
    return MultipleFailureException$internal;
}
exports.$init$MultipleFailureException$internal=$init$MultipleFailureException$internal;
$init$MultipleFailureException$internal();
function filterExecutors$internal(executors$243,filter$244){
    return executors$243.select($$$cl1.$JsCallable((function (e$245){
        return filter$244(e$245.description);
    }),[{$nm:'e',$mt:'prm',$t:{t:TestExecutor$internal},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:TestExecutor$internal}]},Return:{t:$$$cl1.Boolean}}));
};filterExecutors$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$ps:[{$nm:'executors',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$t:TestFilter(),$an:function(){return[];}}],d:['ceylon.test.internal','filterExecutors']};};
function sortExecutors$internal(executors$246,comparator$247){
    return executors$246.$sort($$$cl1.$JsCallable((function (e1$248,e2$249){
        return comparator$247(e1$248.description,e2$249.description);
    }),[{$nm:'e1',$mt:'prm',$t:{t:TestExecutor$internal},$an:function(){return[];}},{$nm:'e2',$mt:'prm',$t:{t:TestExecutor$internal},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:TestExecutor$internal},{t:TestExecutor$internal}]},Return:{t:$$$cl1.Comparison}}));
};sortExecutors$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$ps:[{$nm:'executors',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:TestExecutor$internal}}},$an:function(){return[];}},{$nm:'comparator',$mt:'prm',$t:TestComparator(),$an:function(){return[];}}],d:['ceylon.test.internal','sortExecutors']};};
function compareStates$internal(state1$250,state2$251){
    if(state1$250.equals(state2$251)){
        return $$$cl1.getEqual();
    }else {
        if((state1$250.equals(getIgnored())&&((state2$251.equals(getSuccess())||state2$251.equals(getFailure()))||state2$251.equals(getError())))){
            return $$$cl1.getSmaller();
        }else {
            if((state1$250.equals(getSuccess())&&(state2$251.equals(getFailure())||state2$251.equals(getError())))){
                return $$$cl1.getSmaller();
            }else {
                if((state1$250.equals(getFailure())&&state2$251.equals(getError()))){
                    return $$$cl1.getSmaller();
                }else {
                    return $$$cl1.getLarger();
                }
            }
        }
    }
};compareStates$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'state1',$mt:'prm',$t:{t:TestState},$an:function(){return[];}},{$nm:'state2',$mt:'prm',$t:{t:TestState},$an:function(){return[];}}],d:['ceylon.test.internal','compareStates']};};
function TestResultImpl$internal(description, state, exception, elapsedTime, $$testResultImpl){
    $init$TestResultImpl$internal();
    if ($$testResultImpl===undefined)$$testResultImpl=new TestResultImpl$internal.$$;
    $$testResultImpl.description_=description;
    $$testResultImpl.state_=state;
    if(exception===undefined){exception=null;}
    $$testResultImpl.exception_=exception;
    if(elapsedTime===undefined){elapsedTime=(0);}
    $$testResultImpl.elapsedTime_=elapsedTime;
    TestResult($$testResultImpl);
    $$testResultImpl.$prop$getDescription={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','description']};}};
    $$testResultImpl.$prop$getDescription.get=function(){return description};
    $$testResultImpl.$prop$getState={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestState},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','state']};}};
    $$testResultImpl.$prop$getState.get=function(){return state};
    $$testResultImpl.$prop$getException={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','exception']};}};
    $$testResultImpl.$prop$getException.get=function(){return exception};
    $$testResultImpl.$prop$getElapsedTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','elapsedTime']};}};
    $$testResultImpl.$prop$getElapsedTime.get=function(){return elapsedTime};
    $$testResultImpl.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','string']};}};
    $$testResultImpl.$prop$getString.get=function(){return string};
    return $$testResultImpl;
}
TestResultImpl$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'state',$mt:'prm',$t:{t:TestState},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'exception',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'elapsedTime',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}}],satisfies:[{t:TestResult}],d:['ceylon.test.internal','TestResultImpl']};};
function $init$TestResultImpl$internal(){
    if (TestResultImpl$internal.$$===undefined){
        $$$cl1.initTypeProto(TestResultImpl$internal,'ceylon.test.internal::TestResultImpl',$$$cl1.Basic,$init$TestResult());
        (function($$testResultImpl){
            $$$cl1.defineAttr($$testResultImpl,'description',function(){return this.description_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','description']};});
            $$$cl1.defineAttr($$testResultImpl,'state',function(){return this.state_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TestState},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','state']};});
            $$$cl1.defineAttr($$testResultImpl,'exception',function(){return this.exception_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','exception']};});
            $$$cl1.defineAttr($$testResultImpl,'elapsedTime',function(){return this.elapsedTime_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','elapsedTime']};});
            $$$cl1.defineAttr($$testResultImpl,'string',function(){
                var $$testResultImpl=this;
                return $$$cl1.StringBuilder().appendAll([$$testResultImpl.description.string,$$$cl1.String(" - ",3),$$testResultImpl.state.string,(opt$252=($$$cl1.exists($$testResultImpl.exception)?$$$cl1.StringBuilder().appendAll([$$$cl1.String(" (",2),(opt$253=(opt$254=$$testResultImpl.exception,opt$254!==null?opt$254.string:null),opt$253!==null?opt$253:$$$cl1.String("",0)).string,$$$cl1.String(")",1)]).string:null),opt$252!==null?opt$252:$$$cl1.String("",0)).string]).string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestResultImpl','$at','string']};});
        })(TestResultImpl$internal.$$.prototype);
    }
    return TestResultImpl$internal;
}
exports.$init$TestResultImpl$internal=$init$TestResultImpl$internal;
$init$TestResultImpl$internal();
var opt$252,opt$253,opt$254;
function TestRunResultImpl$internal($$testRunResultImpl){
    $init$TestRunResultImpl$internal();
    if ($$testRunResultImpl===undefined)$$testRunResultImpl=new TestRunResultImpl$internal.$$;
    TestRunResult($$testRunResultImpl);
    $$testRunResultImpl.resultsBuilder$255_=$$$cl1.SequenceBuilder({Element:{t:TestResult}});
    $$testRunResultImpl.$prop$getResultsBuilder$255={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestResult}}},$cont:TestRunResultImpl$internal,d:['ceylon.test.internal','TestRunResultImpl','$at','resultsBuilder']};}};
    $$testRunResultImpl.$prop$getResultsBuilder$255.get=function(){return resultsBuilder$255};
    $$testRunResultImpl.runCounter$256_=(0);
    $$testRunResultImpl.$prop$getRunCounter$256={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','runCounter']};}};
    $$testRunResultImpl.$prop$getRunCounter$256.get=function(){return runCounter$256};
    $$testRunResultImpl.successCounter$257_=(0);
    $$testRunResultImpl.$prop$getSuccessCounter$257={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','successCounter']};}};
    $$testRunResultImpl.$prop$getSuccessCounter$257.get=function(){return successCounter$257};
    $$testRunResultImpl.errorCounter$258_=(0);
    $$testRunResultImpl.$prop$getErrorCounter$258={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','errorCounter']};}};
    $$testRunResultImpl.$prop$getErrorCounter$258.get=function(){return errorCounter$258};
    $$testRunResultImpl.failureCounter$259_=(0);
    $$testRunResultImpl.$prop$getFailureCounter$259={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','failureCounter']};}};
    $$testRunResultImpl.$prop$getFailureCounter$259.get=function(){return failureCounter$259};
    $$testRunResultImpl.ignoreCounter$260_=(0);
    $$testRunResultImpl.$prop$getIgnoreCounter$260={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','ignoreCounter']};}};
    $$testRunResultImpl.$prop$getIgnoreCounter$260.get=function(){return ignoreCounter$260};
    $$testRunResultImpl.startTimeMilliseconds$261_=(0);
    $$testRunResultImpl.$prop$getStartTimeMilliseconds$261={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','startTimeMilliseconds']};}};
    $$testRunResultImpl.$prop$getStartTimeMilliseconds$261.get=function(){return startTimeMilliseconds$261};
    $$testRunResultImpl.endTimeMilliseconds$262_=(0);
    $$testRunResultImpl.$prop$getEndTimeMilliseconds$262={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','endTimeMilliseconds']};}};
    $$testRunResultImpl.$prop$getEndTimeMilliseconds$262.get=function(){return endTimeMilliseconds$262};
    $$testRunResultImpl.$prop$getRunCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','runCount']};}};
    $$testRunResultImpl.$prop$getRunCount.get=function(){return runCount};
    $$testRunResultImpl.$prop$getSuccessCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','successCount']};}};
    $$testRunResultImpl.$prop$getSuccessCount.get=function(){return successCount};
    $$testRunResultImpl.$prop$getErrorCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','errorCount']};}};
    $$testRunResultImpl.$prop$getErrorCount.get=function(){return errorCount};
    $$testRunResultImpl.$prop$getFailureCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','failureCount']};}};
    $$testRunResultImpl.$prop$getFailureCount.get=function(){return failureCount};
    $$testRunResultImpl.$prop$getIgnoreCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','ignoreCount']};}};
    $$testRunResultImpl.$prop$getIgnoreCount.get=function(){return ignoreCount};
    $$testRunResultImpl.$prop$getIsSuccess={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','isSuccess']};}};
    $$testRunResultImpl.$prop$getIsSuccess.get=function(){return isSuccess};
    $$testRunResultImpl.$prop$getStartTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','startTime']};}};
    $$testRunResultImpl.$prop$getStartTime.get=function(){return startTime};
    $$testRunResultImpl.$prop$getEndTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','endTime']};}};
    $$testRunResultImpl.$prop$getEndTime.get=function(){return endTime};
    $$testRunResultImpl.$prop$getElapsedTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','elapsedTime']};}};
    $$testRunResultImpl.$prop$getElapsedTime.get=function(){return elapsedTime};
    $$testRunResultImpl.$prop$getResults={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestResult}}},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','results']};}};
    $$testRunResultImpl.$prop$getResults.get=function(){return results};
    $$testRunResultImpl.listener$263_=$$testRunResultImpl.listener$264();
    return $$testRunResultImpl;
}
TestRunResultImpl$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[],satisfies:[{t:TestRunResult}],d:['ceylon.test.internal','TestRunResultImpl']};};
function $init$TestRunResultImpl$internal(){
    if (TestRunResultImpl$internal.$$===undefined){
        $$$cl1.initTypeProto(TestRunResultImpl$internal,'ceylon.test.internal::TestRunResultImpl',$$$cl1.Basic,$init$TestRunResult());
        (function($$testRunResultImpl){
            $$$cl1.defineAttr($$testRunResultImpl,'resultsBuilder$255',function(){return this.resultsBuilder$255_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestResult}}},$cont:TestRunResultImpl$internal,d:['ceylon.test.internal','TestRunResultImpl','$at','resultsBuilder']};});
            $$$cl1.defineAttr($$testRunResultImpl,'runCounter$256',function(){return this.runCounter$256_;},function(runCounter$265){return this.runCounter$256_=runCounter$265;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','runCounter']};});
            $$$cl1.defineAttr($$testRunResultImpl,'successCounter$257',function(){return this.successCounter$257_;},function(successCounter$266){return this.successCounter$257_=successCounter$266;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','successCounter']};});
            $$$cl1.defineAttr($$testRunResultImpl,'errorCounter$258',function(){return this.errorCounter$258_;},function(errorCounter$267){return this.errorCounter$258_=errorCounter$267;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','errorCounter']};});
            $$$cl1.defineAttr($$testRunResultImpl,'failureCounter$259',function(){return this.failureCounter$259_;},function(failureCounter$268){return this.failureCounter$259_=failureCounter$268;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','failureCounter']};});
            $$$cl1.defineAttr($$testRunResultImpl,'ignoreCounter$260',function(){return this.ignoreCounter$260_;},function(ignoreCounter$269){return this.ignoreCounter$260_=ignoreCounter$269;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','ignoreCounter']};});
            $$$cl1.defineAttr($$testRunResultImpl,'startTimeMilliseconds$261',function(){return this.startTimeMilliseconds$261_;},function(startTimeMilliseconds$270){return this.startTimeMilliseconds$261_=startTimeMilliseconds$270;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','startTimeMilliseconds']};});
            $$$cl1.defineAttr($$testRunResultImpl,'endTimeMilliseconds$262',function(){return this.endTimeMilliseconds$262_;},function(endTimeMilliseconds$271){return this.endTimeMilliseconds$262_=endTimeMilliseconds$271;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test.internal','TestRunResultImpl','$at','endTimeMilliseconds']};});
            $$$cl1.defineAttr($$testRunResultImpl,'runCount',function(){
                var $$testRunResultImpl=this;
                return $$testRunResultImpl.runCounter$256;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','runCount']};});
            $$$cl1.defineAttr($$testRunResultImpl,'successCount',function(){
                var $$testRunResultImpl=this;
                return $$testRunResultImpl.successCounter$257;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','successCount']};});
            $$$cl1.defineAttr($$testRunResultImpl,'errorCount',function(){
                var $$testRunResultImpl=this;
                return $$testRunResultImpl.errorCounter$258;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','errorCount']};});
            $$$cl1.defineAttr($$testRunResultImpl,'failureCount',function(){
                var $$testRunResultImpl=this;
                return $$testRunResultImpl.failureCounter$259;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','failureCount']};});
            $$$cl1.defineAttr($$testRunResultImpl,'ignoreCount',function(){
                var $$testRunResultImpl=this;
                return $$testRunResultImpl.ignoreCounter$260;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','ignoreCount']};});
            $$$cl1.defineAttr($$testRunResultImpl,'isSuccess',function(){
                var $$testRunResultImpl=this;
                return (((!$$testRunResultImpl.successCount.equals((0)))&&$$testRunResultImpl.errorCount.equals((0)))&&$$testRunResultImpl.failureCount.equals((0)));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','isSuccess']};});
            $$$cl1.defineAttr($$testRunResultImpl,'startTime',function(){
                var $$testRunResultImpl=this;
                return $$testRunResultImpl.startTimeMilliseconds$261;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','startTime']};});
            $$$cl1.defineAttr($$testRunResultImpl,'endTime',function(){
                var $$testRunResultImpl=this;
                return $$testRunResultImpl.endTimeMilliseconds$262;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','endTime']};});
            $$$cl1.defineAttr($$testRunResultImpl,'elapsedTime',function(){
                var $$testRunResultImpl=this;
                return $$testRunResultImpl.endTime.minus($$testRunResultImpl.startTime);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','elapsedTime']};});
            $$$cl1.defineAttr($$testRunResultImpl,'results',function(){
                var $$testRunResultImpl=this;
                return $$testRunResultImpl.resultsBuilder$255.sequence;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestResult}}},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','results']};});
            $$$cl1.defineAttr($$testRunResultImpl,'string',function(){
                var $$testRunResultImpl=this;
                var b$272=$$$cl1.StringBuilder();
                $prop$getB$272={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.test.internal','TestRunResultImpl','$at','string','$at','b']};}};
                $prop$getB$272.get=function(){return b$272};
                b$272.append($$$cl1.String("TEST RESULTS",12)).appendNewline();
                if($$testRunResultImpl.results.empty){
                    b$272.append($$$cl1.String("There were no tests!",20)).appendNewline();
                }else {
                    b$272.append($$$cl1.StringBuilder().appendAll([$$$cl1.String("run:     ",9),$$testRunResultImpl.runCount.string]).string).appendNewline();
                    b$272.append($$$cl1.StringBuilder().appendAll([$$$cl1.String("success: ",9),$$testRunResultImpl.successCount.string]).string).appendNewline();
                    b$272.append($$$cl1.StringBuilder().appendAll([$$$cl1.String("failure: ",9),$$testRunResultImpl.failureCount.string]).string).appendNewline();
                    b$272.append($$$cl1.StringBuilder().appendAll([$$$cl1.String("error:   ",9),$$testRunResultImpl.errorCount.string]).string).appendNewline();
                    b$272.append($$$cl1.StringBuilder().appendAll([$$$cl1.String("ignored: ",9),$$testRunResultImpl.ignoreCount.string]).string).appendNewline();
                    b$272.append($$$cl1.StringBuilder().appendAll([$$$cl1.String("time:    ",9),$$testRunResultImpl.elapsedTime.divided((1000)).string,$$$cl1.String("s",1)]).string).appendNewline();
                    b$272.appendNewline();
                    if($$testRunResultImpl.isSuccess){
                        b$272.append($$$cl1.String("TESTS SUCCESS",13)).appendNewline();
                    }else {
                        var it$273 = $$testRunResultImpl.results.iterator();
                        var result$274;while ((result$274=it$273.next())!==$$$cl1.getFinished()){
                            if(((result$274.state.equals(getFailure())||result$274.state.equals(getError()))&&result$274.description.children.empty)){
                                b$272.append(result$274.string).appendNewline();
                            }
                        }
                        b$272.appendNewline();
                        b$272.append($$$cl1.String("TESTS FAILED !",14)).appendNewline();
                    }
                }
                return b$272.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$at','string']};});function listener$264(){
                var $$listener$TestRunResultImpl=new this.listener$264.$$;
                $$listener$TestRunResultImpl.$$outer=this;
                TestListener($$listener$TestRunResultImpl);
                return $$listener$TestRunResultImpl;
            };listener$264.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$cont:TestRunResultImpl$internal,satisfies:[{t:TestListener}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.test.internal','TestRunResultImpl','$o','listener']};};
            function $init$listener$264(){
                if (listener$264.$$===undefined){
                    $$$cl1.initTypeProto(listener$264,'ceylon.test.internal::TestRunResultImpl.listener',$$$cl1.Basic,$init$TestListener());
                    TestRunResultImpl$internal.listener$264=listener$264;
                    (function($$listener$TestRunResultImpl){
                        $$listener$TestRunResultImpl.testRunStart=function (description$275){
                            var $$listener$TestRunResultImpl=this;
                            return ($$listener$TestRunResultImpl.$$outer.startTimeMilliseconds$261=$$$cl1.getSystem().milliseconds);
                        };
                        $$listener$TestRunResultImpl.testRunStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[];}}],$cont:listener$264,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testRunStart']};};
                        $$listener$TestRunResultImpl.testRunFinish=function (result$276){
                            var $$listener$TestRunResultImpl=this;
                            return ($$listener$TestRunResultImpl.$$outer.endTimeMilliseconds$262=$$$cl1.getSystem().milliseconds);
                        };
                        $$listener$TestRunResultImpl.testRunFinish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestRunResult},$an:function(){return[];}}],$cont:listener$264,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testRunFinish']};};
                        $$listener$TestRunResultImpl.testFinish=function (result$277){
                            var $$listener$TestRunResultImpl=this;
                            return $$listener$TestRunResultImpl.handleResult$278(result$277,true);
                        };
                        $$listener$TestRunResultImpl.testFinish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:listener$264,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testFinish']};};
                        $$listener$TestRunResultImpl.testError=function (result$279){
                            var $$listener$TestRunResultImpl=this;
                            return $$listener$TestRunResultImpl.handleResult$278(result$279,false);
                        };
                        $$listener$TestRunResultImpl.testError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:listener$264,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testError']};};
                        $$listener$TestRunResultImpl.testIgnored=function (result$280){
                            var $$listener$TestRunResultImpl=this;
                            return $$listener$TestRunResultImpl.handleResult$278(result$280,false);
                        };
                        $$listener$TestRunResultImpl.testIgnored.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:listener$264,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testIgnored']};};
                        $$listener$TestRunResultImpl.handleResult$278=function handleResult$278(result$281,wasRun$282){
                            var $$listener$TestRunResultImpl=this;
                            $$listener$TestRunResultImpl.$$outer.resultsBuilder$255.append(result$281);
                            if((result$281.state.equals(getSuccess())&&result$281.description.children.empty)){
                                (oldsuccessCounter$283=$$listener$TestRunResultImpl.$$outer.successCounter$257,$$listener$TestRunResultImpl.$$outer.successCounter$257=oldsuccessCounter$283.successor,oldsuccessCounter$283);
                                var oldsuccessCounter$283;
                                ($$listener$TestRunResultImpl.$$outer.runCounter$256=$$listener$TestRunResultImpl.$$outer.runCounter$256.plus((opt$284=(wasRun$282?(1):null),opt$284!==null?opt$284:(0))));
                                var opt$284;
                            }else {
                                if((result$281.state.equals(getFailure())&&$$$cl1.exists(result$281.exception))){
                                    (oldfailureCounter$285=$$listener$TestRunResultImpl.$$outer.failureCounter$259,$$listener$TestRunResultImpl.$$outer.failureCounter$259=oldfailureCounter$285.successor,oldfailureCounter$285);
                                    var oldfailureCounter$285;
                                    ($$listener$TestRunResultImpl.$$outer.runCounter$256=$$listener$TestRunResultImpl.$$outer.runCounter$256.plus((opt$286=(wasRun$282?(1):null),opt$286!==null?opt$286:(0))));
                                    var opt$286;
                                }else {
                                    if((result$281.state.equals(getError())&&$$$cl1.exists(result$281.exception))){
                                        (olderrorCounter$287=$$listener$TestRunResultImpl.$$outer.errorCounter$258,$$listener$TestRunResultImpl.$$outer.errorCounter$258=olderrorCounter$287.successor,olderrorCounter$287);
                                        var olderrorCounter$287;
                                        ($$listener$TestRunResultImpl.$$outer.runCounter$256=$$listener$TestRunResultImpl.$$outer.runCounter$256.plus((opt$288=(wasRun$282?(1):null),opt$288!==null?opt$288:(0))));
                                        var opt$288;
                                    }else {
                                        if(result$281.state.equals(getIgnored())){
                                            (oldignoreCounter$289=$$listener$TestRunResultImpl.$$outer.ignoreCounter$260,$$listener$TestRunResultImpl.$$outer.ignoreCounter$260=oldignoreCounter$289.successor,oldignoreCounter$289);
                                            var oldignoreCounter$289;
                                        }
                                    }
                                }
                            }
                        };$$listener$TestRunResultImpl.handleResult$278.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}},{$nm:'wasRun',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:listener$264,d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','handleResult']};};
                    })(listener$264.$$.prototype);
                }
                return listener$264;
            }
            $$testRunResultImpl.$init$listener$264=$init$listener$264;
            $init$listener$264();
            $$$cl1.defineAttr($$testRunResultImpl,'listener',function(){return this.listener$263_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TestRunResultImpl$internal.listener$264},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test.internal','TestRunResultImpl','$o','listener']};});
            $$testRunResultImpl.listener$264=listener$264;$$testRunResultImpl.listener$264.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TestRunResultImpl$internal.listener$264},$cont:TestRunResultImpl$internal,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test.internal','TestRunResultImpl','$o','listener']};};
        })(TestRunResultImpl$internal.$$.prototype);
    }
    return TestRunResultImpl$internal;
}
exports.$init$TestRunResultImpl$internal=$init$TestRunResultImpl$internal;
$init$TestRunResultImpl$internal();
exports.$pkg$ans$ceylon$test$internal=function(){return[$$$cl1.doc($$$cl1.String("Contains internal implementation of the test module.",52))];};
var test=function (){
    return Test();
};
test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Test},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Marks an element as being a test. \nOnly nullary functions should be annotated with `test`.",90)),$$$cl1.shared(),$$$cl1.annotation()];},d:['ceylon.test','test']};};
exports.test=test;
var beforeTest=function (){
    return BeforeTest();
};
beforeTest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:BeforeTest},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Marks an element which should be run before each test in its scope.\nOnly nullary functions should be annotated with `beforeTest`.",129)),$$$cl1.shared(),$$$cl1.annotation()];},d:['ceylon.test','beforeTest']};};
exports.beforeTest=beforeTest;
var afterTest=function (){
    return AfterTest();
};
afterTest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:AfterTest},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Marks a function which will be run after each test in its scope.\nOnly nullary functions should be annotated with `afterTest`.",125)),$$$cl1.shared(),$$$cl1.annotation()];},d:['ceylon.test','afterTest']};};
exports.afterTest=afterTest;
var ignore=function (reason$290){
    if(reason$290===undefined){reason$290=$$$cl1.String("",0);}
    return Ignore(reason$290);
};
ignore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Ignore},$ps:[{$nm:'reason',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.doc("Reason why the test is ignored.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Marks a test or group of tests which should not be executed.",60)),$$$cl1.shared(),$$$cl1.annotation()];},d:['ceylon.test','ignore']};};
exports.ignore=ignore;
function Test($$test){
    $init$Test();
    if ($$test===undefined)$$test=new Test.$$;
    $$test.$$targs$$={Value:{t:Test},ProgramElement:{t:$$$cl1.FunctionDeclaration$meta$declaration}};
    $$$cl1.OptionalAnnotation({Value:{t:Test},ProgramElement:{t:$$$cl1.FunctionDeclaration$meta$declaration}},$$test);
    $$$cl1.add_type_arg($$test,'Value',{t:Test});
    $$$cl1.add_type_arg($$test,'ProgramElement',{t:$$$cl1.FunctionDeclaration$meta$declaration});
    return $$test;
}
Test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[],satisfies:[{t:$$$cl1.OptionalAnnotation,a:{Value:{t:Test},ProgramElement:{t:$$$cl1.FunctionDeclaration$meta$declaration}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Annotation class for [[test]].",30)),$$$cl1.shared(),$$$cl1.$final(),$$$cl1.annotation()];},d:['ceylon.test','Test']};};
exports.Test=Test;
function $init$Test(){
    if (Test.$$===undefined){
        $$$cl1.initTypeProto(Test,'ceylon.test::Test',$$$cl1.Basic,$$$cl1.OptionalAnnotation);
    }
    return Test;
}
exports.$init$Test=$init$Test;
$init$Test();
function BeforeTest($$beforeTest){
    $init$BeforeTest();
    if ($$beforeTest===undefined)$$beforeTest=new BeforeTest.$$;
    $$beforeTest.$$targs$$={Value:{t:BeforeTest},ProgramElement:{t:$$$cl1.FunctionDeclaration$meta$declaration}};
    $$$cl1.OptionalAnnotation({Value:{t:BeforeTest},ProgramElement:{t:$$$cl1.FunctionDeclaration$meta$declaration}},$$beforeTest);
    $$$cl1.add_type_arg($$beforeTest,'Value',{t:BeforeTest});
    $$$cl1.add_type_arg($$beforeTest,'ProgramElement',{t:$$$cl1.FunctionDeclaration$meta$declaration});
    return $$beforeTest;
}
BeforeTest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[],satisfies:[{t:$$$cl1.OptionalAnnotation,a:{Value:{t:BeforeTest},ProgramElement:{t:$$$cl1.FunctionDeclaration$meta$declaration}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Annotation class for [[beforeTest]].",36)),$$$cl1.shared(),$$$cl1.$final(),$$$cl1.annotation()];},d:['ceylon.test','BeforeTest']};};
exports.BeforeTest=BeforeTest;
function $init$BeforeTest(){
    if (BeforeTest.$$===undefined){
        $$$cl1.initTypeProto(BeforeTest,'ceylon.test::BeforeTest',$$$cl1.Basic,$$$cl1.OptionalAnnotation);
    }
    return BeforeTest;
}
exports.$init$BeforeTest=$init$BeforeTest;
$init$BeforeTest();
function AfterTest($$afterTest){
    $init$AfterTest();
    if ($$afterTest===undefined)$$afterTest=new AfterTest.$$;
    $$afterTest.$$targs$$={Value:{t:AfterTest},ProgramElement:{t:$$$cl1.FunctionDeclaration$meta$declaration}};
    $$$cl1.OptionalAnnotation({Value:{t:AfterTest},ProgramElement:{t:$$$cl1.FunctionDeclaration$meta$declaration}},$$afterTest);
    $$$cl1.add_type_arg($$afterTest,'Value',{t:AfterTest});
    $$$cl1.add_type_arg($$afterTest,'ProgramElement',{t:$$$cl1.FunctionDeclaration$meta$declaration});
    return $$afterTest;
}
AfterTest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[],satisfies:[{t:$$$cl1.OptionalAnnotation,a:{Value:{t:AfterTest},ProgramElement:{t:$$$cl1.FunctionDeclaration$meta$declaration}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Annotation class for [[afterTest]].",35)),$$$cl1.shared(),$$$cl1.$final(),$$$cl1.annotation()];},d:['ceylon.test','AfterTest']};};
exports.AfterTest=AfterTest;
function $init$AfterTest(){
    if (AfterTest.$$===undefined){
        $$$cl1.initTypeProto(AfterTest,'ceylon.test::AfterTest',$$$cl1.Basic,$$$cl1.OptionalAnnotation);
    }
    return AfterTest;
}
exports.$init$AfterTest=$init$AfterTest;
$init$AfterTest();
function Ignore(reason, $$ignore){
    $init$Ignore();
    if ($$ignore===undefined)$$ignore=new Ignore.$$;
    $$ignore.$$targs$$={Value:{t:Ignore},ProgramElement:{t:'u', l:[{t:$$$cl1.FunctionDeclaration$meta$declaration},{t:$$$cl1.ClassDeclaration$meta$declaration}]}};
    $$ignore.reason_=reason;
    $$$cl1.OptionalAnnotation({Value:{t:Ignore},ProgramElement:{t:'u', l:[{t:$$$cl1.FunctionDeclaration$meta$declaration},{t:$$$cl1.ClassDeclaration$meta$declaration}]}},$$ignore);
    $$$cl1.add_type_arg($$ignore,'Value',{t:Ignore});
    return $$ignore;
}
Ignore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'reason',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.doc("Reason why the test is ignored."),$$$cl1.shared()];}}],satisfies:[{t:$$$cl1.OptionalAnnotation,a:{Value:{t:Ignore},ProgramElement:{t:'u', l:[{t:$$$cl1.FunctionDeclaration$meta$declaration},{t:$$$cl1.ClassDeclaration$meta$declaration}]}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Annotation class for [[ignore]].",32)),$$$cl1.shared(),$$$cl1.$final(),$$$cl1.annotation()];},d:['ceylon.test','Ignore']};};
exports.Ignore=Ignore;
function $init$Ignore(){
    if (Ignore.$$===undefined){
        $$$cl1.initTypeProto(Ignore,'ceylon.test::Ignore',$$$cl1.Basic,$$$cl1.OptionalAnnotation);
        (function($$ignore){
            $$$cl1.defineAttr($$ignore,'reason',function(){return this.reason_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Ignore,$an:function(){return[$$$cl1.doc("Reason why the test is ignored."),$$$cl1.shared()];},d:['ceylon.test','Ignore','$at','reason']};});
        })(Ignore.$$.prototype);
    }
    return Ignore;
}
exports.$init$Ignore=$init$Ignore;
$init$Ignore();
function TestListener($$testListener){
}
TestListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a listener which will be notified about events that occur during a test run.",87)),$$$cl1.shared()];},d:['ceylon.test','TestListener']};};
exports.TestListener=TestListener;
function $init$TestListener(){
    if (TestListener.$$===undefined){
        $$$cl1.initTypeProtoI(TestListener,'ceylon.test::TestListener');
        (function($$testListener){
            $$testListener.testRunStart=function testRunStart(description$291){
                var $$testListener=this;
            };$$testListener.testRunStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[$$$cl1.doc("The description of the tests to be run.")];}}],$cont:TestListener,$an:function(){return[$$$cl1.doc($$$cl1.String("Called before any tests have been run.",38)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testRunStart']};};
            $$testListener.testRunFinish=function testRunFinish(result$292){
                var $$testListener=this;
            };$$testListener.testRunFinish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestRunResult},$an:function(){return[$$$cl1.doc("The summary result of the test run.")];}}],$cont:TestListener,$an:function(){return[$$$cl1.doc($$$cl1.String("Called after all tests have finished.",37)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testRunFinish']};};
            $$testListener.testStart=function testStart(description$293){
                var $$testListener=this;
            };$$testListener.testStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[$$$cl1.doc("The description of test to be started")];}}],$cont:TestListener,$an:function(){return[$$$cl1.doc($$$cl1.String("Called when a test is about to be started.",42)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testStart']};};
            $$testListener.testFinish=function testFinish(result$294){
                var $$testListener=this;
            };$$testListener.testFinish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[$$$cl1.doc("The detailed test result.")];}}],$cont:TestListener,$an:function(){return[$$$cl1.doc($$$cl1.String("Called when a test has finished, whether the test succeeds or not.",66)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testFinish']};};
            $$testListener.testIgnored=function testIgnored(result$295){
                var $$testListener=this;
            };$$testListener.testIgnored.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[$$$cl1.doc("The detailed test result.")];}}],$cont:TestListener,$an:function(){return[$$$cl1.doc($$$cl1.String("Called when a test will *not* be run, because it is marked with [[ignore]] annotation.",86)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testIgnored']};};
            $$testListener.testError=function testError(result$296){
                var $$testListener=this;
            };$$testListener.testError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[$$$cl1.doc("The test result.")];}}],$cont:TestListener,$an:function(){return[$$$cl1.doc($$$cl1.String("Called when a test will not be run, because some error has occured. \nFor example a invalid test function signature.",115)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testError']};};
        })(TestListener.$$.prototype);
    }
    return TestListener;
}
exports.$init$TestListener=$init$TestListener;
$init$TestListener();
function suite(suiteName$297,tests$298){
    if(tests$298===undefined){tests$298=$$$cl1.getEmpty();}
    $$$cl1.print($$$cl1.String("DEPRECATED API, use function createTestRunner()",47));
}
exports.suite=suite;
suite.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'suiteName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'tests',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.deprecated($$$cl1.String("Deprecated API, use function [[createTestRunner]].",50)),$$$cl1.shared()];},d:['ceylon.test','suite']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("\nThe `ceylon.test` module is a simple framework to write repeatable tests.\n\nTests execute the code of the module under test and \ncan make assertions about what it does. For example,\n \n* do functions, when called with certain arguments, return the expected results?\n* do classes behave as required?\n* etc.\n\nThe usual way to use this module is to write your tests (which make\ncalls to the declarations under test) as top level functions or\nas methods of top level classes, annotating them with [[test]]. \n\nFor example, here is a trivial [[test]] function, which will always succeed.\n```\ntest\nvoid shouldAlwaysSucceed() {}\n```\n\nAssertions can be evaluated by using the language\'s `assert` statement \nor with the various `assert...` functions, for example:\n```\nassert(is Hobbit frodo);\nassert(exists ring);\n\nassertNotEquals(frodo, sauron);\nassertThatException(() => gandalf.castLightnings()).hasType(`NotEnoughMagicPowerException`);\n```\n\nIt\'s also perfectly acceptable to throw \n[[AssertionException]] directly.\n\nA test function which completes without propogating an exception is \nclassified as a [[success]]. A test function which propogates \nan [[AssertionException]] is classified as a [[failure]]. A test \nfunction which propogates any other type of `Exception` is classified as \nan [[error]].\n\nTest functions can be grouped together inside a class.\n```\nclass YodaTest() {\n\n    test void shouldBeJedi() {\n        assert(yoda is Jedi);\n    }\n\n    test void shouldHavePower() {\n        assert(yoda.midichloriansCount > 1k);\n    }\n```\n\nCommon initialization logic can be placed into separate functions, \nwhich run [[before|beforeTest]] or [[after|afterTest]] each test.\n```\nclass StarshipTest() {\n \n    beforeTest void init() => starship.chargePhasers();\n     \n    afterTest void dispose() => starship.shutdownSystems();\n```\n\nSometimes you want to temporarily disable a test or a group of tests, \nthis can be done via the [[ignore]] annotation.\n```\ntest\nignore(\"still not implemented\")\nvoid shouldBeFasterThanLight() {\n```\n\nTests can be run programmatically for a whole module, a package or only \nindividual classes and functions. This is usually achieved using the\n[[createTestRunner]] factory method, most simply by giving it the \ndeclaration of the module to be run:\n```\nvalue result = createTestRunner([`module com.acme`]).run();\nprint(result.isSuccess);\n```\nOr by enumerating the things to be tested:\n```\nvalue result = createTestRunner([\n        `shouldBeFasterThanLight`,\n        `StarshipTest`]).run();\nprint(result.isSuccess);\n```\n\nAlthough you can implement the [[TestRunner]] interface directly,\n[[createTestRunner]] has numerous defaulted parameters which usually \nmean you don\'t have to.\n \nUsing listeners you can react to important events during test execution, \nor you can exclude particular tests, or execute them in a specific order.\n```\nobject ringingListener satisfies TestListener {\n    shared actual void testError(TestResult result) => alarm.ring();\n}\n \nBoolean integrationTestFilter(TestDescription d) {\n    return d.name.endsWith(\"IntegrationTest\");\n}\n \nComparison failFastComparator(TestDescription d1, TestDescription d2) {\n    return dateOfLastFailure(d1) <=> dateOfLastFailure(d2);\n}\n \nTestRunner runner = createTestRunner{\n    sources = [`module com.acme`];\n    listeners = [ringingListener];\n    filter = integrationTestFilter;\n    comparator = failFastComparator;\n};\n```\n",3400)),$$$cl1.by([$$$cl1.String("Tom Bentley",11),$$$cl1.String("Tomáš Hradec",12)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.license($$$cl1.String("Apache Software License",23))];};
function TestState(string, $$testState){
    $init$TestState();
    if ($$testState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$testState.string_=string;
    return $$testState;
}
TestState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}}],of:[{t:success$299},{t:failure$300},{t:error$301},{t:ignored$302}],$an:function(){return[$$$cl1.doc($$$cl1.String("The result state of test execution.",35)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.test','TestState']};};
exports.TestState=TestState;
function $init$TestState(){
    if (TestState.$$===undefined){
        $$$cl1.initTypeProto(TestState,'ceylon.test::TestState',$$$cl1.Basic);
        (function($$testState){
            $$$cl1.defineAttr($$testState,'string',function(){return this.string_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestState,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','TestState','$at','string']};});
        })(TestState.$$.prototype);
    }
    return TestState;
}
exports.$init$TestState=$init$TestState;
$init$TestState();
function success$299(){
    var $$success=new success$299.$$;
    TestState($$$cl1.String("success",7),$$success);
    return $$success;
};success$299.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TestState},$an:function(){return[$$$cl1.doc("A test state is _success_, if it complete normally (that is, does not throw an exception)."),$$$cl1.shared()];},d:['ceylon.test','success']};};
function $init$success$299(){
    if (success$299.$$===undefined){
        $$$cl1.initTypeProto(success$299,'ceylon.test::success',$init$TestState());
    }
    return success$299;
}
exports.$init$success$299=$init$success$299;
$init$success$299();
var success$303;
function getSuccess(){
    if (success$303===undefined){success$303=$init$success$299()();success$303.$$metamodel$$=getSuccess.$$metamodel$$;}
    return success$303;
}
exports.getSuccess=getSuccess;
getSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:success$299},$an:function(){return[$$$cl1.doc($$$cl1.String("A test state is _success_, if it complete normally (that is, does not throw an exception).",90)),$$$cl1.shared()];},d:['ceylon.test','success']};};
$prop$getSuccess={get:getSuccess,$$metamodel$$:getSuccess.$$metamodel$$};
exports.$prop$getSuccess=$prop$getSuccess;
function failure$300(){
    var $$failure=new failure$300.$$;
    TestState($$$cl1.String("failure",7),$$failure);
    return $$failure;
};failure$300.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TestState},$an:function(){return[$$$cl1.doc("A test state is _failure_, if it propagates an [[AssertionException]]."),$$$cl1.shared()];},d:['ceylon.test','failure']};};
function $init$failure$300(){
    if (failure$300.$$===undefined){
        $$$cl1.initTypeProto(failure$300,'ceylon.test::failure',$init$TestState());
    }
    return failure$300;
}
exports.$init$failure$300=$init$failure$300;
$init$failure$300();
var failure$304;
function getFailure(){
    if (failure$304===undefined){failure$304=$init$failure$300()();failure$304.$$metamodel$$=getFailure.$$metamodel$$;}
    return failure$304;
}
exports.getFailure=getFailure;
getFailure.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:failure$300},$an:function(){return[$$$cl1.doc($$$cl1.String("A test state is _failure_, if it propagates an [[AssertionException]].",70)),$$$cl1.shared()];},d:['ceylon.test','failure']};};
$prop$getFailure={get:getFailure,$$metamodel$$:getFailure.$$metamodel$$};
exports.$prop$getFailure=$prop$getFailure;
function error$301(){
    var $$error=new error$301.$$;
    TestState($$$cl1.String("error",5),$$error);
    return $$error;
};error$301.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TestState},$an:function(){return[$$$cl1.doc("A test state is _error_, if it propagates any exception which is not an [[AssertionException]]."),$$$cl1.shared()];},d:['ceylon.test','error']};};
function $init$error$301(){
    if (error$301.$$===undefined){
        $$$cl1.initTypeProto(error$301,'ceylon.test::error',$init$TestState());
    }
    return error$301;
}
exports.$init$error$301=$init$error$301;
$init$error$301();
var error$305;
function getError(){
    if (error$305===undefined){error$305=$init$error$301()();error$305.$$metamodel$$=getError.$$metamodel$$;}
    return error$305;
}
exports.getError=getError;
getError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:error$301},$an:function(){return[$$$cl1.doc($$$cl1.String("A test state is _error_, if it propagates any exception which is not an [[AssertionException]].",95)),$$$cl1.shared()];},d:['ceylon.test','error']};};
$prop$getError={get:getError,$$metamodel$$:getError.$$metamodel$$};
exports.$prop$getError=$prop$getError;
function ignored$302(){
    var $$ignored=new ignored$302.$$;
    TestState($$$cl1.String("ignored",7),$$ignored);
    return $$ignored;
};ignored$302.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TestState},$an:function(){return[$$$cl1.doc("A test state is _ignored_, if it is marked with [[ignore]] annotation."),$$$cl1.shared()];},d:['ceylon.test','ignored']};};
function $init$ignored$302(){
    if (ignored$302.$$===undefined){
        $$$cl1.initTypeProto(ignored$302,'ceylon.test::ignored',$init$TestState());
    }
    return ignored$302;
}
exports.$init$ignored$302=$init$ignored$302;
$init$ignored$302();
var ignored$306;
function getIgnored(){
    if (ignored$306===undefined){ignored$306=$init$ignored$302()();ignored$306.$$metamodel$$=getIgnored.$$metamodel$$;}
    return ignored$306;
}
exports.getIgnored=getIgnored;
getIgnored.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ignored$302},$an:function(){return[$$$cl1.doc($$$cl1.String("A test state is _ignored_, if it is marked with [[ignore]] annotation.",70)),$$$cl1.shared()];},d:['ceylon.test','ignored']};};
$prop$getIgnored={get:getIgnored,$$metamodel$$:getIgnored.$$metamodel$$};
exports.$prop$getIgnored=$prop$getIgnored;
function SimpleLoggingListener($$simpleLoggingListener){
    $init$SimpleLoggingListener();
    if ($$simpleLoggingListener===undefined)$$simpleLoggingListener=new SimpleLoggingListener.$$;
    TestListener($$simpleLoggingListener);
    return $$simpleLoggingListener;
}
SimpleLoggingListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[],satisfies:[{t:TestListener}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[TestListener]] which prints information about test execution to the standard output.",88)),$$$cl1.shared()];},d:['ceylon.test','SimpleLoggingListener']};};
exports.SimpleLoggingListener=SimpleLoggingListener;
function $init$SimpleLoggingListener(){
    if (SimpleLoggingListener.$$===undefined){
        $$$cl1.initTypeProto(SimpleLoggingListener,'ceylon.test::SimpleLoggingListener',$$$cl1.Basic,$init$TestListener());
        (function($$simpleLoggingListener){
            $$simpleLoggingListener.testRunStart=function testRunStart(description$307){
                var $$simpleLoggingListener=this;
                $$$cl1.print($$simpleLoggingListener.banner$308($$$cl1.String("TESTS STARTED",13)));
            };$$simpleLoggingListener.testRunStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[];}}],$cont:SimpleLoggingListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','SimpleLoggingListener','$m','testRunStart']};};
            $$simpleLoggingListener.testRunFinish=function testRunFinish(result$309){
                var $$simpleLoggingListener=this;
                $$$cl1.print($$simpleLoggingListener.banner$308($$$cl1.String("TEST RESULTS",12)));
                if(result$309.results.empty){
                    $$$cl1.print($$$cl1.String("There were no tests!",20));
                }else {
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("run:     ",9),result$309.runCount.string]).string);
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("success: ",9),result$309.successCount.string]).string);
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("failure: ",9),result$309.failureCount.string]).string);
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("error:   ",9),result$309.errorCount.string]).string);
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("ignored: ",9),result$309.ignoreCount.string]).string);
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("time:    ",9),result$309.elapsedTime.divided((1000)).string,$$$cl1.String("s",1)]).string);
                    $$$cl1.print($$$cl1.String("",0));
                    if(result$309.isSuccess){
                        $$$cl1.print($$simpleLoggingListener.banner$308($$$cl1.String("TESTS SUCCESS",13)));
                    }else {
                        var it$310 = result$309.results.iterator();
                        var r$311;while ((r$311=it$310.next())!==$$$cl1.getFinished()){
                            if(((r$311.state.equals(getFailure())||r$311.state.equals(getError()))&&r$311.description.children.empty)){
                                $$$cl1.print(r$311.string);
                            }
                        }
                        $$$cl1.print($$$cl1.String("",0));
                        $$$cl1.print($$simpleLoggingListener.banner$308($$$cl1.String("TESTS FAILED !",14)));
                    }
                }
            };$$simpleLoggingListener.testRunFinish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestRunResult},$an:function(){return[];}}],$cont:SimpleLoggingListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','SimpleLoggingListener','$m','testRunFinish']};};
            $$simpleLoggingListener.testStart=function testStart(description$312){
                var $$simpleLoggingListener=this;
                $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("running: ",9),description$312.name.string]).string);
            };$$simpleLoggingListener.testStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'description',$mt:'prm',$t:{t:TestDescription},$an:function(){return[];}}],$cont:SimpleLoggingListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','SimpleLoggingListener','$m','testStart']};};
            $$simpleLoggingListener.testFinish=function testFinish(result$313){
                var $$simpleLoggingListener=this;
                if((result$313.state.equals(getError())||result$313.state.equals(getFailure()))){
                    var e$314;
                    if((e$314=result$313.exception)!==null){
                        e$314.printStackTrace();
                    }
                }
            };$$simpleLoggingListener.testFinish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:SimpleLoggingListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','SimpleLoggingListener','$m','testFinish']};};
            $$simpleLoggingListener.testError=function testError(result$315){
                var $$simpleLoggingListener=this;
                if((result$315.state.equals(getError())||result$315.state.equals(getFailure()))){
                    var e$316;
                    if((e$316=result$315.exception)!==null){
                        e$316.printStackTrace();
                    }
                }
            };$$simpleLoggingListener.testError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:SimpleLoggingListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','SimpleLoggingListener','$m','testError']};};
            $$simpleLoggingListener.banner$308=function banner$308(title$317){
                var $$simpleLoggingListener=this;
                var sb$318=$$$cl1.StringBuilder();
                var totalWith$319=(60);
                var bannerWidth$320=totalWith$319.minus(title$317.size).minus((2));
                var it$321 = $$$cl1.Range((0),bannerWidth$320.divided((2)),{Element:{t:$$$cl1.Integer}}).iterator();
                var i$322;while ((i$322=it$321.next())!==$$$cl1.getFinished()){
                    sb$318.appendCharacter($$$cl1.Character(61));
                }
                if(bannerWidth$320.remainder((2)).equals((1))){
                    sb$318.appendCharacter($$$cl1.Character(61));
                }
                sb$318.append($$$cl1.String(" ",1)).append(title$317).append($$$cl1.String(" ",1));
                var it$323 = $$$cl1.Range((0),bannerWidth$320.divided((2)),{Element:{t:$$$cl1.Integer}}).iterator();
                var i$324;while ((i$324=it$323.next())!==$$$cl1.getFinished()){
                    sb$318.appendCharacter($$$cl1.Character(61));
                }
                return sb$318.string;
            };$$simpleLoggingListener.banner$308.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'title',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:SimpleLoggingListener,d:['ceylon.test','SimpleLoggingListener','$m','banner']};};
        })(SimpleLoggingListener.$$.prototype);
    }
    return SimpleLoggingListener;
}
exports.$init$SimpleLoggingListener=$init$SimpleLoggingListener;
$init$SimpleLoggingListener();
function TestDescription($$testDescription){
}
TestDescription.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl1.doc($$$cl1.String("Describes a test, or a group of tests, can be arranged in a tree.",65)),$$$cl1.shared()];},d:['ceylon.test','TestDescription']};};
exports.TestDescription=TestDescription;
function $init$TestDescription(){
    if (TestDescription.$$===undefined){
        $$$cl1.initTypeProtoI(TestDescription,'ceylon.test::TestDescription');
        (function($$testDescription){
            $$testDescription.$prop$getName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestDescription,$an:function(){return[$$$cl1.doc($$$cl1.String("The user friendly name of this test.",36)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestDescription','$at','name']};}};
            $$testDescription.$prop$getDeclaration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:'u', l:[{t:$$$cl1.ClassDeclaration$meta$declaration},{t:$$$cl1.FunctionDeclaration$meta$declaration}]}]},$cont:TestDescription,$an:function(){return[$$$cl1.doc($$$cl1.String("The program element declaration of this test, if one exists.",60)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestDescription','$at','declaration']};}};
            $$testDescription.$prop$getChildren={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestDescription}}},$cont:TestDescription,$an:function(){return[$$$cl1.doc($$$cl1.String("The children of this test, if any.",34)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestDescription','$at','children']};}};
        })(TestDescription.$$.prototype);
    }
    return TestDescription;
}
exports.$init$TestDescription=$init$TestDescription;
$init$TestDescription();
function TestRunResult($$testRunResult){
}
TestRunResult.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a summary result of the test run.",44)),$$$cl1.shared()];},d:['ceylon.test','TestRunResult']};};
exports.TestRunResult=TestRunResult;
function $init$TestRunResult(){
    if (TestRunResult.$$===undefined){
        $$$cl1.initTypeProtoI(TestRunResult,'ceylon.test::TestRunResult');
        (function($$testRunResult){
            $$testRunResult.$prop$getIsSuccess={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("Determine if all executed tests succeeded.",42)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','isSuccess']};}};
            $$testRunResult.$prop$getRunCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of executed tests.",29)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','runCount']};}};
            $$testRunResult.$prop$getSuccessCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of tests that finished [[successfully|success]].",59)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','successCount']};}};
            $$testRunResult.$prop$getFailureCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of tests that finished with [[failure]].",51)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','failureCount']};}};
            $$testRunResult.$prop$getErrorCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of tests that finished with [[error]].",49)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','errorCount']};}};
            $$testRunResult.$prop$getIgnoreCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of [[ignored]] tests during the test run.",52)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','ignoreCount']};}};
            $$testRunResult.$prop$getStartTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The time in milliseconds when the test run started.",51)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','startTime']};}};
            $$testRunResult.$prop$getEndTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The time in milliseconds when the test run finished.",52)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','endTime']};}};
            $$testRunResult.$prop$getElapsedTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The total elapsed time in miliseconds.",38)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','elapsedTime']};}};
            $$testRunResult.$prop$getResults={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:TestResult}}},$cont:TestRunResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The detailed results of each test.",34)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestRunResult','$at','results']};}};
        })(TestRunResult.$$.prototype);
    }
    return TestRunResult;
}
exports.$init$TestRunResult=$init$TestRunResult;
$init$TestRunResult();
function AssertionComparisonException(message$325, actualValue, expectedValue, $$assertionComparisonException){
    $init$AssertionComparisonException();
    if ($$assertionComparisonException===undefined)$$assertionComparisonException=new AssertionComparisonException.$$;
    $$assertionComparisonException.message$325_=message$325;
    $$assertionComparisonException.actualValue_=actualValue;
    $$assertionComparisonException.expectedValue_=expectedValue;
    $$$cl1.AssertionException($$assertionComparisonException.message$325,$$assertionComparisonException);
    $$assertionComparisonException.$prop$getActualValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertionComparisonException,$an:function(){return[$$$cl1.doc($$$cl1.String("The actual string value.",24)),$$$cl1.shared()];},d:['ceylon.test','AssertionComparisonException','$at','actualValue']};}};
    $$assertionComparisonException.$prop$getActualValue.get=function(){return actualValue};
    $$assertionComparisonException.$prop$getExpectedValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertionComparisonException,$an:function(){return[$$$cl1.doc($$$cl1.String("The expected string value.",26)),$$$cl1.shared()];},d:['ceylon.test','AssertionComparisonException','$at','expectedValue']};}};
    $$assertionComparisonException.$prop$getExpectedValue.get=function(){return expectedValue};
    return $$assertionComparisonException;
}
AssertionComparisonException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.AssertionException},$ps:[{$nm:'message',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.doc("The message describing the problem.")];}},{$nm:'actualValue',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.doc("The actual string value."),$$$cl1.shared()];}},{$nm:'expectedValue',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.doc("The expected string value."),$$$cl1.shared()];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Thrown to indicate that two values which should have been \"the \nsame\" (according to some comparison function) were in fact \ndifferent.",134)),$$$cl1.see([$$$cl1.$init$OpenFunction()($$$cl1.getModules$meta().find('ceylon.test','1.0.0').findPackage('ceylon.test'),assertEquals),$$$cl1.$init$OpenFunction()($$$cl1.getModules$meta().find('ceylon.test','1.0.0').findPackage('ceylon.test'),assertNotEquals)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.FunctionDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.test','AssertionComparisonException']};};
exports.AssertionComparisonException=AssertionComparisonException;
function $init$AssertionComparisonException(){
    if (AssertionComparisonException.$$===undefined){
        $$$cl1.initTypeProto(AssertionComparisonException,'ceylon.test::AssertionComparisonException',$$$cl1.AssertionException);
        (function($$assertionComparisonException){
            $$$cl1.defineAttr($$assertionComparisonException,'actualValue',function(){return this.actualValue_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertionComparisonException,$an:function(){return[$$$cl1.doc($$$cl1.String("The actual string value.",24)),$$$cl1.shared()];},d:['ceylon.test','AssertionComparisonException','$at','actualValue']};});
            $$$cl1.defineAttr($$assertionComparisonException,'expectedValue',function(){return this.expectedValue_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertionComparisonException,$an:function(){return[$$$cl1.doc($$$cl1.String("The expected string value.",26)),$$$cl1.shared()];},d:['ceylon.test','AssertionComparisonException','$at','expectedValue']};});
            $$$cl1.defineAttr($$assertionComparisonException,'message$325',function(){return this.message$325_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertionComparisonException,$an:function(){return[$$$cl1.doc("The message describing the problem.")];},d:['ceylon.test','AssertionComparisonException','$at','message']};});
        })(AssertionComparisonException.$$.prototype);
    }
    return AssertionComparisonException;
}
exports.$init$AssertionComparisonException=$init$AssertionComparisonException;
$init$AssertionComparisonException();
function fail(message$326){
    if(message$326===undefined){message$326=null;}
    throw $$$cl1.wrapexc($$$cl1.AssertionException((opt$327=message$326,opt$327!==null?opt$327:$$$cl1.String("assertion failed",16))),'30:4-30:61','ceylon/test/assertions.ceylon');
    var opt$327;
}
exports.fail=fail;
fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'message',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.doc("The message describing the problem.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Throws an [[AssertionException]] to fail a test.",48)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','1.0.0').findPackage('ceylon.language'),$$$cl1.AssertionException),$$$cl1.String("always",6)),$$$cl1.shared()];},d:['ceylon.test','fail']};};
function assertTrue(condition$328,message$329){
    if(message$329===undefined){message$329=null;}
    if((!condition$328)){
        throw $$$cl1.wrapexc($$$cl1.AssertionException((opt$330=message$329,opt$330!==null?opt$330:$$$cl1.String("assertion failed: expected true",31))),'40:8-40:80','ceylon/test/assertions.ceylon');
        var opt$330;
    }
}
exports.assertTrue=assertTrue;
assertTrue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'condition',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.doc("The condition to be checked.")];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.doc("The message describing the problem.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the _condition_ is false.",43)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','1.0.0').findPackage('ceylon.language'),$$$cl1.AssertionException),$$$cl1.String("When _condition_ is false.",26)),$$$cl1.shared()];},d:['ceylon.test','assertTrue']};};
function assertFalse(condition$331,message$332){
    if(message$332===undefined){message$332=null;}
    if(condition$331){
        throw $$$cl1.wrapexc($$$cl1.AssertionException((opt$333=message$332,opt$333!==null?opt$333:$$$cl1.String("assertion failed: expected false",32))),'52:8-52:81','ceylon/test/assertions.ceylon');
        var opt$333;
    }
}
exports.assertFalse=assertFalse;
assertFalse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'condition',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.doc("The condition to be checked.")];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.doc("The message describing the problem.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the _condition_ is true.",42)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','1.0.0').findPackage('ceylon.language'),$$$cl1.AssertionException),$$$cl1.String("When _condition_ is true.",25)),$$$cl1.shared()];},d:['ceylon.test','assertFalse']};};
function assertNull(val$334,message$335){
    if(message$335===undefined){message$335=null;}
    var val$336;
    if((val$336=val$334)!==null){
        throw $$$cl1.wrapexc($$$cl1.AssertionException((opt$337=message$335,opt$337!==null?opt$337:$$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: expected null, but was ",41),val$336.string]).string)),'62:8-62:97','ceylon/test/assertions.ceylon');
        var opt$337;
    }
}
exports.assertNull=assertNull;
assertNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[$$$cl1.doc("The value to be checked.")];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.doc("The message describing the problem.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given _value_ is not null.",48)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','1.0.0').findPackage('ceylon.language'),$$$cl1.AssertionException),$$$cl1.String("When _val_ is not null.",23)),$$$cl1.shared()];},d:['ceylon.test','assertNull']};};
function assertNotNull(val$338,message$339){
    if(message$339===undefined){message$339=null;}
    if((!$$$cl1.exists(val$338))){
        throw $$$cl1.wrapexc($$$cl1.AssertionException((opt$340=message$339,opt$340!==null?opt$340:$$$cl1.String("assertion failed: expected not null",35))),'72:8-72:84','ceylon/test/assertions.ceylon');
        var opt$340;
    }
}
exports.assertNotNull=assertNotNull;
assertNotNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[$$$cl1.doc("The value to be checked.")];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.doc("The message describing the problem.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given _value_ is null.",44)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','1.0.0').findPackage('ceylon.language'),$$$cl1.AssertionException),$$$cl1.String("When _val_ is null.",19)),$$$cl1.shared()];},d:['ceylon.test','assertNotNull']};};
function assertEquals(actual$341,expected$342,message$343,compare$344){
    if(message$343===undefined){message$343=null;}
    if(compare$344===undefined){compare$344=function (val1$345,val2$346){
        return equalsCompare(actual$341,expected$342);
    };}
    if((!compare$344(actual$341,expected$342))){
        var actualText$347=nullSafeString(actual$341);
        $prop$getActualText$347={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertEquals','$at','actualText']};}};
        $prop$getActualText$347.get=function(){return actualText$347};
        var expectedText$348=nullSafeString(expected$342);
        $prop$getExpectedText$348={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertEquals','$at','expectedText']};}};
        $prop$getExpectedText$348.get=function(){return expectedText$348};
        var exceptionMessage$349=$$$cl1.StringBuilder().appendAll([(opt$350=message$343,opt$350!==null?opt$350:$$$cl1.String("assertion failed",16)).string,$$$cl1.String(": ",2),actualText$347.string,$$$cl1.String(" != ",4),expectedText$348.string]).string;
        $prop$getExceptionMessage$349={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertEquals','$at','exceptionMessage']};}};
        $prop$getExceptionMessage$349.get=function(){return exceptionMessage$349};
        var opt$350;
        throw $$$cl1.wrapexc(AssertionComparisonException(exceptionMessage$349,actualText$347,expectedText$348),'87:8-87:86','ceylon/test/assertions.ceylon');
    }
}
exports.assertEquals=assertEquals;
assertEquals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'actual',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[$$$cl1.doc("The actual value to be checked.")];}},{$nm:'expected',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[$$$cl1.doc("The expected value.")];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.doc("The message describing the problem.")];}},{$nm:'compare',$mt:'prm',$pt:'f',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.doc("The compare function.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given values are not equal according to the given compare function.",89)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.test','1.0.0').findPackage('ceylon.test'),AssertionComparisonException),$$$cl1.String("When _actual_ != _expected_.",28)),$$$cl1.shared()];},d:['ceylon.test','assertEquals']};};
function assertNotEquals(actual$351,expected$352,message$353,compare$354){
    if(message$353===undefined){message$353=null;}
    if(compare$354===undefined){compare$354=function (val1$355,val2$356){
        return equalsCompare(actual$351,expected$352);
    };}
    if(compare$354(actual$351,expected$352)){
        var actualText$357=nullSafeString(actual$351);
        $prop$getActualText$357={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertNotEquals','$at','actualText']};}};
        $prop$getActualText$357.get=function(){return actualText$357};
        var expectedText$358=nullSafeString(expected$352);
        $prop$getExpectedText$358={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertNotEquals','$at','expectedText']};}};
        $prop$getExpectedText$358.get=function(){return expectedText$358};
        var exceptionMessage$359=$$$cl1.StringBuilder().appendAll([(opt$360=message$353,opt$360!==null?opt$360:$$$cl1.String("assertion failed",16)).string,$$$cl1.String(": ",2),actualText$357.string,$$$cl1.String(" == ",4),expectedText$358.string]).string;
        $prop$getExceptionMessage$359={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertNotEquals','$at','exceptionMessage']};}};
        $prop$getExceptionMessage$359.get=function(){return exceptionMessage$359};
        var opt$360;
        throw $$$cl1.wrapexc(AssertionComparisonException(exceptionMessage$359,actualText$357,expectedText$358),'102:8-102:86','ceylon/test/assertions.ceylon');
    }
}
exports.assertNotEquals=assertNotEquals;
assertNotEquals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'actual',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[$$$cl1.doc("The actual value to be checked.")];}},{$nm:'expected',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[$$$cl1.doc("The expected value.")];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.doc("The message describing the problem.")];}},{$nm:'compare',$mt:'prm',$pt:'f',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.doc("The compare function.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given values are equal according to the given compare function.",85)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.test','1.0.0').findPackage('ceylon.test'),AssertionComparisonException),$$$cl1.String("When _actual_ == _expected_.",28)),$$$cl1.shared()];},d:['ceylon.test','assertNotEquals']};};
function assertThatException(exceptionSource$361){
    var exception$362;
    if($$$cl1.isOfType((exception$362=exceptionSource$361),{t:$$$cl1.Exception})){
        return ExceptionAssert(exception$362);
    }else {
        //assert at assertions.ceylon (115:8-115:65)
        var exceptionCallback$363;
        if (!($$$cl1.isOfType((exceptionCallback$363=exceptionSource$361),{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'is Anything() exceptionCallback = exceptionSource\' at assertions.ceylon (115:14-115:64)"),'115:8-115:65','assertions.ceylon'); }
        try{
            exceptionCallback$363();
        }catch(ex$364){
            if (ex$364.getT$name === undefined) ex$364=$$$cl1.NativeException(ex$364);
            if($$$cl1.isOfType(ex$364,{t:$$$cl1.Exception})){
                return ExceptionAssert(ex$364);
            }
            else{throw ex$364}
        }
        throw $$$cl1.wrapexc($$$cl1.AssertionException($$$cl1.String("assertion failed: expected exception will be thrown",51)),'121:8-121:87','ceylon/test/assertions.ceylon');
    }
}
exports.assertThatException=assertThatException;
assertThatException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ExceptionAssert},$ps:[{$nm:'exceptionSource',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Exception},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[$$$cl1.doc("The checked exception or callback which should throw exception.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if expected exception isn\'t thrown.",50)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','1.0.0').findPackage('ceylon.language'),$$$cl1.AssertionException),$$$cl1.String("When _exceptionSource()_ doesn\'t throw an Exception",51)),$$$cl1.shared()];},d:['ceylon.test','assertThatException']};};
function ExceptionAssert(exception$365, $$exceptionAssert){
    $init$ExceptionAssert();
    if ($$exceptionAssert===undefined)$$exceptionAssert=new ExceptionAssert.$$;
    $$exceptionAssert.exception$365_=exception$365;
    return $$exceptionAssert;
}
ExceptionAssert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'exception',$mt:'prm',$t:{t:$$$cl1.Exception},$an:function(){return[$$$cl1.doc("The exception to be checked.")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("An assertions applicable to exceptions, see [[assertThatException]].",68)),$$$cl1.shared()];},d:['ceylon.test','ExceptionAssert']};};
exports.ExceptionAssert=ExceptionAssert;
function $init$ExceptionAssert(){
    if (ExceptionAssert.$$===undefined){
        $$$cl1.initTypeProto(ExceptionAssert,'ceylon.test::ExceptionAssert',$$$cl1.Basic);
        (function($$exceptionAssert){
            $$exceptionAssert.hasType=function hasType(typeCondition$366){
                var $$exceptionAssert=this;
                var typeCondition$367;
                if($$$cl1.isOfType((typeCondition$367=typeCondition$366),{t:$$$cl1.Class$meta$model,a:{Arguments:{t:$$$cl1.Nothing},Type:{t:$$$cl1.Exception}}})){
                    var actualType$368=$$$cl1.type$meta($$exceptionAssert.exception$365,{Type:{t:$$$cl1.Exception}});
                    $prop$getActualType$368={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.ClassModel$meta$model,a:{Arguments:{t:$$$cl1.Nothing},Type:{t:$$$cl1.Exception}}},d:['ceylon.test','ExceptionAssert','$m','hasType','$at','actualType']};}};
                    $prop$getActualType$368.get=function(){return actualType$368};
                    if((!actualType$368.equals(typeCondition$367))){
                        throw $$$cl1.wrapexc($$$cl1.AssertionException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: expected exception with type ",47),typeCondition$367.string,$$$cl1.String(", but has ",10),actualType$368.string]).string),'135:16-135:132','ceylon/test/assertions.ceylon');
                    }
                }else {
                    var typeCondition$369;
                    if($$$cl1.isOfType((typeCondition$369=typeCondition$366),{t:$$$cl1.Callable,a:{Arguments:{t:'T', l:[{t:$$$cl1.ClassModel$meta$model,a:{Arguments:{t:$$$cl1.Nothing},Type:{t:$$$cl1.Exception}}}]},Return:{t:$$$cl1.Boolean}}})){
                        if((!typeCondition$369($$$cl1.type$meta($$exceptionAssert.exception$365,{Type:{t:$$$cl1.Exception}})))){
                            throw $$$cl1.wrapexc($$$cl1.AssertionException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: expected exception with different type than ",62),$$$cl1.type$meta($$exceptionAssert.exception$365,{Type:{t:$$$cl1.Exception}}).string]).string),'139:16-139:125','ceylon/test/assertions.ceylon');
                        }
                    }
                }
                return $$exceptionAssert;
            };$$exceptionAssert.hasType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ExceptionAssert},$ps:[{$nm:'typeCondition',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Class$meta$model,a:{Arguments:{t:$$$cl1.Nothing},Type:{t:$$$cl1.Exception}}},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.ClassModel$meta$model,a:{Arguments:{t:$$$cl1.Nothing},Type:{t:$$$cl1.Exception}}}}]},Return:{t:$$$cl1.Boolean}}}]},$an:function(){return[$$$cl1.doc("The expected type or type predicate.")];}}],$cont:ExceptionAssert,$an:function(){return[$$$cl1.doc($$$cl1.String("Verifies that the actual _exception_ has expected type.",55)),$$$cl1.shared()];},d:['ceylon.test','ExceptionAssert','$m','hasType']};};
            $$exceptionAssert.hasMessage=function hasMessage(messageCondition$370){
                var $$exceptionAssert=this;
                
                var case$371=messageCondition$370;
                if ($$$cl1.isOfType(messageCondition$370,{t:$$$cl1.String})) {
                    if((!$$exceptionAssert.exception$365.message.equals(case$371))){
                        throw $$$cl1.wrapexc($$$cl1.AssertionException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: expected exception with message ",50),case$371.string,$$$cl1.String(", but has ",10),$$exceptionAssert.exception$365.message.string]).string),'151:16-151:145','ceylon/test/assertions.ceylon');
                    }
                }else if ($$$cl1.isOfType(messageCondition$370,{t:$$$cl1.Callable,a:{Arguments:{t:'T', l:[{t:$$$cl1.String}]},Return:{t:$$$cl1.Boolean}}})) {
                    if((!case$371($$exceptionAssert.exception$365.message))){
                        throw $$$cl1.wrapexc($$$cl1.AssertionException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: expected different exception message than ",60),$$exceptionAssert.exception$365.message.string]).string),'156:16-156:125','ceylon/test/assertions.ceylon');
                    }
                }
                return $$exceptionAssert;
            };$$exceptionAssert.hasMessage.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ExceptionAssert},$ps:[{$nm:'messageCondition',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.String}}]},Return:{t:$$$cl1.Boolean}}}]},$an:function(){return[$$$cl1.doc("The expected message or message predicate.")];}}],$cont:ExceptionAssert,$an:function(){return[$$$cl1.doc($$$cl1.String("Verifies that the actual _exception_ has expected message.",58)),$$$cl1.shared()];},d:['ceylon.test','ExceptionAssert','$m','hasMessage']};};
            $$exceptionAssert.hasNoCause=function hasNoCause(){
                var $$exceptionAssert=this;
                var cause$372;
                if((cause$372=$$exceptionAssert.exception$365.cause)!==null){
                    throw $$$cl1.wrapexc($$$cl1.AssertionException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: expected exception without cause, but has ",60),cause$372.string]).string),'165:12-165:109','ceylon/test/assertions.ceylon');
                }
                return $$exceptionAssert;
            };$$exceptionAssert.hasNoCause.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ExceptionAssert},$ps:[],$cont:ExceptionAssert,$an:function(){return[$$$cl1.doc($$$cl1.String("Verifies that the actual _exception_ does not have a cause.",59)),$$$cl1.shared()];},d:['ceylon.test','ExceptionAssert','$m','hasNoCause']};};
            $$$cl1.defineAttr($$exceptionAssert,'exception$365',function(){return this.exception$365_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Exception},$cont:ExceptionAssert,$an:function(){return[$$$cl1.doc("The exception to be checked.")];},d:['ceylon.test','ExceptionAssert','$at','exception']};});
        })(ExceptionAssert.$$.prototype);
    }
    return ExceptionAssert;
}
exports.$init$ExceptionAssert=$init$ExceptionAssert;
$init$ExceptionAssert();
function equalsCompare(obj1$373,obj2$374){
    var obj1$375;
    if((obj1$375=obj1$373)!==null){
        var obj2$376;
        if((obj2$376=obj2$374)!==null){
            return obj1$375.equals(obj2$376);
        }
    }
    return $$$cl1.exists(obj1$373).equals($$$cl1.exists(obj2$374));
}
exports.equalsCompare=equalsCompare;
equalsCompare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj1',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'obj2',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Compares two things. Returns true if both are null or both are non-null and \nare the same according to [[Object.equals]].",121)),$$$cl1.shared()];},d:['ceylon.test','equalsCompare']};};
function nullSafeString(obj$377){
    var obj$378;
    if((obj$378=obj$377)!==null){
        return obj$378.string;
    }
    return $$$cl1.String("null",4);
};nullSafeString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'obj',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}}],d:['ceylon.test','nullSafeString']};};
exports.$pkg$ans$ceylon$test=function(){return[$$$cl1.doc($$$cl1.String("Contains core public API of the test module.",44)),$$$cl1.shared()];};
function TestResult($$testResult){
}
TestResult.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a detailed result of the execution of a particular test.",67)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.test','1.0.0').findPackage('ceylon.test'),TestRunResult)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.test','TestResult']};};
exports.TestResult=TestResult;
function $init$TestResult(){
    if (TestResult.$$===undefined){
        $$$cl1.initTypeProtoI(TestResult,'ceylon.test::TestResult');
        (function($$testResult){
            $$testResult.$prop$getDescription={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestDescription},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The test this is the result for.",32)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestResult','$at','description']};}};
            $$testResult.$prop$getState={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestState},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The result state of this test.",30)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestResult','$at','state']};}};
            $$testResult.$prop$getException={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The exception thrown during this test, if any.",46)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestResult','$at','exception']};}};
            $$testResult.$prop$getElapsedTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The total elapsed time in miliseconds.",38)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.test','TestResult','$at','elapsedTime']};}};
        })(TestResult.$$.prototype);
    }
    return TestResult;
}
exports.$init$TestResult=$init$TestResult;
$init$TestResult();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
