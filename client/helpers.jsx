const createHouseRules = (houseRules) => {
  const { suitableAge, smoking, parties, pets } = houseRules;
  const hostRulesString = createHostRulesString(houseRules);

  if (suitableAge !== 'all' && (smoking === false || parties === false || pets === false)) {
    return `This place isn’t suitable for ${suitableAge} and the host doesn’t allow ${hostRulesString}.`
  } else if (suitableAge !== 'all' && smoking === true && parties === true && pets === true) {
    return `This place isn't suitable for ${suitableAge}.`
  } else if (suitableAge === 'all' && (smoking === false || parties === false || pets === false)) {
    return `The host doesn't allow ${hostRulesString}.`
  } else {
    return '';
  }
};

const createHostRulesString = (houseRules) => {
  let doesNotAllow = [];
  for (let rule in houseRules) {
    if ((rule === 'smoking' || rule === 'parties' || rule === 'pets') && houseRules[rule] === false) {
      doesNotAllow.push(rule);
    }
  }

  if (doesNotAllow.length === 1) {
    return doesNotAllow[0];
  }

  let result = '';
  for (let i = 0; i < doesNotAllow.length; i++) {
    if (i === doesNotAllow.length - 1) {
      result += `or ${doesNotAllow[i]}`;
    } else {
      result += `${doesNotAllow[i]}, `;
    }
  }
  return result;
};

const createPropertyTitle = (typeOfPlace, propertyType) => {
  propertyType = convertFromCamelCase(propertyType);

  if (typeOfPlace === 'entirePlace') {
    return 'Entire ' + propertyType;
  } else {
    return convertFromCamelCase(typeOfPlace) + ' in ' + propertyType;
  }
};

const convertFromCamelCase = (str) => {
  const result = str.replace(/([A-Z])/g,' $1');
  const final = result.charAt(0).toUpperCase()+result.slice(1);
  return final;
};


module.exports = {
  createHouseRules,
  createPropertyTitle
};
