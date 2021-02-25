const introduction = name => 
  `Hi, my name is ${name}.`

const introductionWithLanguage = (name, language) => 
  `Hi, my name is ${name} and I am learning to program in ${language}.`;

const introductionWithLanguageOptional = (name, language = "JavaScript") => 
  `Hi, my name is ${name} and I am learning to program in ${language}.`;
