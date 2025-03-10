// List of countries with their flags and basic information
export const countries = [
  // North America
  { id: 'usa', name: 'United States', flag: '🇺🇸', continent: 'North America', difficulty: 'easy' },
  { id: 'can', name: 'Canada', flag: '🇨🇦', continent: 'North America', difficulty: 'easy' },
  { id: 'mex', name: 'Mexico', flag: '🇲🇽', continent: 'North America', difficulty: 'medium' },

  // South America
  { id: 'arg', name: 'Argentina', flag: '🇦🇷', continent: 'South America', difficulty: 'medium' },
  { id: 'bol', name: 'Bolivia', flag: '🇧🇴', continent: 'South America', difficulty: 'hard' },
  { id: 'bra', name: 'Brazil', flag: '🇧🇷', continent: 'South America', difficulty: 'medium' },
  { id: 'chl', name: 'Chile', flag: '🇨🇱', continent: 'South America', difficulty: 'medium' },
  { id: 'col', name: 'Colombia', flag: '🇨🇴', continent: 'South America', difficulty: 'hard' },
  { id: 'ecu', name: 'Ecuador', flag: '🇪🇨', continent: 'South America', difficulty: 'hard' },
  { id: 'guy', name: 'Guyana', flag: '🇬🇾', continent: 'South America', difficulty: 'hard' },
  { id: 'pry', name: 'Paraguay', flag: '🇵🇾', continent: 'South America', difficulty: 'hard' },
  { id: 'per', name: 'Peru', flag: '🇵🇪', continent: 'South America', difficulty: 'hard' },
  { id: 'sur', name: 'Suriname', flag: '🇸🇷', continent: 'South America', difficulty: 'hard' },
  { id: 'ury', name: 'Uruguay', flag: '🇺🇾', continent: 'South America', difficulty: 'hard' },
  { id: 'ven', name: 'Venezuela', flag: '🇻🇪', continent: 'South America', difficulty: 'hard' },

  // Europe
  { id: 'alb', name: 'Albania', flag: '🇦🇱', continent: 'Europe', difficulty: 'hard' },
  { id: 'and', name: 'Andorra', flag: '🇦🇩', continent: 'Europe', difficulty: 'hard' },
  { id: 'aut', name: 'Austria', flag: '🇦🇹', continent: 'Europe', difficulty: 'medium' },
  { id: 'blr', name: 'Belarus', flag: '🇧🇾', continent: 'Europe', difficulty: 'hard' },
  { id: 'bel', name: 'Belgium', flag: '🇧🇪', continent: 'Europe', difficulty: 'medium' },
  { id: 'bih', name: 'Bosnia and Herzegovina', flag: '🇧🇦', continent: 'Europe', difficulty: 'hard' },
  { id: 'bgr', name: 'Bulgaria', flag: '🇧🇬', continent: 'Europe', difficulty: 'hard' },
  { id: 'hrv', name: 'Croatia', flag: '🇭🇷', continent: 'Europe', difficulty: 'medium' },
  { id: 'cyp', name: 'Cyprus', flag: '🇨🇾', continent: 'Europe', difficulty: 'hard' },
  { id: 'cze', name: 'Czech Republic', flag: '🇨🇿', continent: 'Europe', difficulty: 'medium' },
  { id: 'dnk', name: 'Denmark', flag: '🇩🇰', continent: 'Europe', difficulty: 'medium' },
  { id: 'est', name: 'Estonia', flag: '🇪🇪', continent: 'Europe', difficulty: 'medium' },
  { id: 'fin', name: 'Finland', flag: '🇫🇮', continent: 'Europe', difficulty: 'medium' },
  { id: 'fra', name: 'France', flag: '🇫🇷', continent: 'Europe', difficulty: 'easy' },
  { id: 'deu', name: 'Germany', flag: '🇩🇪', continent: 'Europe', difficulty: 'easy' },
  { id: 'grc', name: 'Greece', flag: '🇬🇷', continent: 'Europe', difficulty: 'medium' },
  { id: 'hun', name: 'Hungary', flag: '🇭🇺', continent: 'Europe', difficulty: 'medium' },
  { id: 'isl', name: 'Iceland', flag: '🇮🇸', continent: 'Europe', difficulty: 'medium' },
  { id: 'irl', name: 'Ireland', flag: '🇮🇪', continent: 'Europe', difficulty: 'medium' },
  { id: 'ita', name: 'Italy', flag: '🇮🇹', continent: 'Europe', difficulty: 'easy' },
  { id: 'lva', name: 'Latvia', flag: '🇱🇻', continent: 'Europe', difficulty: 'medium' },
  { id: 'lie', name: 'Liechtenstein', flag: '🇱🇮', continent: 'Europe', difficulty: 'hard' },
  { id: 'ltu', name: 'Lithuania', flag: '🇱🇹', continent: 'Europe', difficulty: 'medium' },
  { id: 'lux', name: 'Luxembourg', flag: '🇱🇺', continent: 'Europe', difficulty: 'medium' },
  { id: 'mlt', name: 'Malta', flag: '🇲🇹', continent: 'Europe', difficulty: 'hard' },
  { id: 'mda', name: 'Moldova', flag: '🇲🇩', continent: 'Europe', difficulty: 'hard' },
  { id: 'mco', name: 'Monaco', flag: '🇲🇨', continent: 'Europe', difficulty: 'hard' },
  { id: 'mne', name: 'Montenegro', flag: '🇲🇪', continent: 'Europe', difficulty: 'hard' },
  { id: 'nld', name: 'Netherlands', flag: '🇳🇱', continent: 'Europe', difficulty: 'medium' },
  { id: 'mkd', name: 'North Macedonia', flag: '🇲🇰', continent: 'Europe', difficulty: 'hard' },
  { id: 'nor', name: 'Norway', flag: '🇳🇴', continent: 'Europe', difficulty: 'medium' },
  { id: 'pol', name: 'Poland', flag: '🇵🇱', continent: 'Europe', difficulty: 'medium' },
  { id: 'prt', name: 'Portugal', flag: '🇵🇹', continent: 'Europe', difficulty: 'medium' },
  { id: 'rou', name: 'Romania', flag: '🇷🇴', continent: 'Europe', difficulty: 'medium' },
  { id: 'rus', name: 'Russia', flag: '🇷🇺', continent: 'Europe', difficulty: 'medium' },
  { id: 'smr', name: 'San Marino', flag: '🇸🇲', continent: 'Europe', difficulty: 'hard' },
  { id: 'srb', name: 'Serbia', flag: '🇷🇸', continent: 'Europe', difficulty: 'hard' },
  { id: 'svk', name: 'Slovakia', flag: '🇸🇰', continent: 'Europe', difficulty: 'medium' },
  { id: 'svn', name: 'Slovenia', flag: '🇸🇮', continent: 'Europe', difficulty: 'hard' },
  { id: 'esp', name: 'Spain', flag: '🇪🇸', continent: 'Europe', difficulty: 'easy' },
  { id: 'swe', name: 'Sweden', flag: '🇸🇪', continent: 'Europe', difficulty: 'medium' },
  { id: 'che', name: 'Switzerland', flag: '🇨🇭', continent: 'Europe', difficulty: 'easy' },
  { id: 'ukr', name: 'Ukraine', flag: '🇺🇦', continent: 'Europe', difficulty: 'medium' },
  { id: 'gbr', name: 'United Kingdom', flag: '🇬🇧', continent: 'Europe', difficulty: 'easy' },
  { id: 'vat', name: 'Vatican City', flag: '🇻🇦', continent: 'Europe', difficulty: 'hard' },

  // Asia
  { id: 'afg', name: 'Afghanistan', flag: '🇦🇫', continent: 'Asia', difficulty: 'hard' },
  { id: 'arm', name: 'Armenia', flag: '🇦🇲', continent: 'Asia', difficulty: 'hard' },
  { id: 'aze', name: 'Azerbaijan', flag: '🇦🇿', continent: 'Asia', difficulty: 'hard' },
  { id: 'bhr', name: 'Bahrain', flag: '🇧🇭', continent: 'Asia', difficulty: 'hard' },
  { id: 'bgd', name: 'Bangladesh', flag: '🇧🇩', continent: 'Asia', difficulty: 'hard' },
  { id: 'btn', name: 'Bhutan', flag: '🇧🇹', continent: 'Asia', difficulty: 'hard' },
  { id: 'brn', name: 'Brunei', flag: '🇧🇳', continent: 'Asia', difficulty: 'hard' },
  { id: 'khm', name: 'Cambodia', flag: '🇰🇭', continent: 'Asia', difficulty: 'hard' },
  { id: 'chn', name: 'China', flag: '🇨🇳', continent: 'Asia', difficulty: 'medium' },
  { id: 'geo', name: 'Georgia', flag: '🇬🇪', continent: 'Asia', difficulty: 'hard' },
  { id: 'ind', name: 'India', flag: '🇮🇳', continent: 'Asia', difficulty: 'medium' },
  { id: 'idn', name: 'Indonesia', flag: '🇮🇩', continent: 'Asia', difficulty: 'medium' },
  { id: 'irn', name: 'Iran', flag: '🇮🇷', continent: 'Asia', difficulty: 'medium' },
  { id: 'irq', name: 'Iraq', flag: '🇮🇶', continent: 'Asia', difficulty: 'hard' },
  { id: 'isr', name: 'Israel', flag: '🇮🇱', continent: 'Asia', difficulty: 'hard' },
  { id: 'jpn', name: 'Japan', flag: '🇯🇵', continent: 'Asia', difficulty: 'easy' },
  { id: 'jor', name: 'Jordan', flag: '🇯🇴', continent: 'Asia', difficulty: 'hard' },
  { id: 'kaz', name: 'Kazakhstan', flag: '🇰🇿', continent: 'Asia', difficulty: 'hard' },
  { id: 'kwt', name: 'Kuwait', flag: '🇰🇼', continent: 'Asia', difficulty: 'hard' },
  { id: 'kgz', name: 'Kyrgyzstan', flag: '🇰🇬', continent: 'Asia', difficulty: 'hard' },
  { id: 'lao', name: 'Laos', flag: '🇱🇦', continent: 'Asia', difficulty: 'hard' },
  { id: 'lbn', name: 'Lebanon', flag: '🇱🇧', continent: 'Asia', difficulty: 'hard' },
  { id: 'mys', name: 'Malaysia', flag: '🇲🇾', continent: 'Asia', difficulty: 'hard' },
  { id: 'mdv', name: 'Maldives', flag: '🇲🇻', continent: 'Asia', difficulty: 'hard' },
  { id: 'mng', name: 'Mongolia', flag: '🇲🇳', continent: 'Asia', difficulty: 'hard' },
  { id: 'mmr', name: 'Myanmar', flag: '🇲🇲', continent: 'Asia', difficulty: 'hard' },
  { id: 'npl', name: 'Nepal', flag: '🇳🇵', continent: 'Asia', difficulty: 'hard' },
  { id: 'omn', name: 'Oman', flag: '🇴🇲', continent: 'Asia', difficulty: 'hard' },
  { id: 'pak', name: 'Pakistan', flag: '🇵🇰', continent: 'Asia', difficulty: 'medium' },
  { id: 'phl', name: 'Philippines', flag: '🇵🇭', continent: 'Asia', difficulty: 'hard' },
  { id: 'qat', name: 'Qatar', flag: '🇶🇦', continent: 'Asia', difficulty: 'medium' },
  { id: 'sau', name: 'Saudi Arabia', flag: '🇸🇦', continent: 'Asia', difficulty: 'medium' },
  { id: 'sgp', name: 'Singapore', flag: '🇸🇬', continent: 'Asia', difficulty: 'medium' },
  { id: 'kor', name: 'South Korea', flag: '🇰🇷', continent: 'Asia', difficulty: 'medium' },
  { id: 'lka', name: 'Sri Lanka', flag: '🇱🇰', continent: 'Asia', difficulty: 'hard' },
  { id: 'syr', name: 'Syria', flag: '🇸🇾', continent: 'Asia', difficulty: 'hard' },
  { id: 'twn', name: 'Taiwan', flag: '🇹🇼', continent: 'Asia', difficulty: 'medium' },
  { id: 'tjk', name: 'Tajikistan', flag: '🇹🇯', continent: 'Asia', difficulty: 'hard' },
  { id: 'tha', name: 'Thailand', flag: '🇹🇭', continent: 'Asia', difficulty: 'medium' },
  { id: 'tur', name: 'Turkey', flag: '🇹🇷', continent: 'Asia', difficulty: 'medium' },
  { id: 'tkm', name: 'Turkmenistan', flag: '🇹🇲', continent: 'Asia', difficulty: 'hard' },
  { id: 'are', name: 'United Arab Emirates', flag: '🇦🇪', continent: 'Asia', difficulty: 'medium' },
  { id: 'uzb', name: 'Uzbekistan', flag: '🇺🇿', continent: 'Asia', difficulty: 'hard' },
  { id: 'vnm', name: 'Vietnam', flag: '🇻🇳', continent: 'Asia', difficulty: 'medium' },
  { id: 'yem', name: 'Yemen', flag: '🇾🇪', continent: 'Asia', difficulty: 'hard' },

  // Africa
  { id: 'dza', name: 'Algeria', flag: '🇩🇿', continent: 'Africa', difficulty: 'hard' },
  { id: 'ago', name: 'Angola', flag: '🇦🇴', continent: 'Africa', difficulty: 'hard' },
  { id: 'ben', name: 'Benin', flag: '🇧🇯', continent: 'Africa', difficulty: 'hard' },
  { id: 'bwa', name: 'Botswana', flag: '🇧🇼', continent: 'Africa', difficulty: 'hard' },
  { id: 'bfa', name: 'Burkina Faso', flag: '🇧🇫', continent: 'Africa', difficulty: 'hard' },
  { id: 'bdi', name: 'Burundi', flag: '🇧🇮', continent: 'Africa', difficulty: 'hard' },
  { id: 'cmr', name: 'Cameroon', flag: '🇨🇲', continent: 'Africa', difficulty: 'hard' },
  { id: 'cpv', name: 'Cape Verde', flag: '🇨🇻', continent: 'Africa', difficulty: 'hard' },
  { id: 'caf', name: 'Central African Republic', flag: '🇨🇫', continent: 'Africa', difficulty: 'hard' },
  { id: 'tcd', name: 'Chad', flag: '🇹🇩', continent: 'Africa', difficulty: 'hard' },
  { id: 'com', name: 'Comoros', flag: '🇰🇲', continent: 'Africa', difficulty: 'hard' },
  { id: 'cog', name: 'Congo', flag: '🇨🇬', continent: 'Africa', difficulty: 'hard' },
  { id: 'dji', name: 'Djibouti', flag: '🇩🇯', continent: 'Africa', difficulty: 'hard' },
  { id: 'egy', name: 'Egypt', flag: '🇪🇬', continent: 'Africa', difficulty: 'medium' },
  { id: 'gnq', name: 'Equatorial Guinea', flag: '🇬🇶', continent: 'Africa', difficulty: 'hard' },
  { id: 'eri', name: 'Eritrea', flag: '🇪🇷', continent: 'Africa', difficulty: 'hard' },
  { id: 'eth', name: 'Ethiopia', flag: '🇪🇹', continent: 'Africa', difficulty: 'hard' },
  { id: 'gab', name: 'Gabon', flag: '🇬🇦', continent: 'Africa', difficulty: 'hard' },
  { id: 'gmb', name: 'Gambia', flag: '🇬🇲', continent: 'Africa', difficulty: 'hard' },
  { id: 'gha', name: 'Ghana', flag: '🇬🇭', continent: 'Africa', difficulty: 'hard' },
  { id: 'gin', name: 'Guinea', flag: '🇬🇳', continent: 'Africa', difficulty: 'hard' },
  { id: 'gnb', name: 'Guinea-Bissau', flag: '🇬🇼', continent: 'Africa', difficulty: 'hard' },
  { id: 'civ', name: 'Ivory Coast', flag: '🇨🇮', continent: 'Africa', difficulty: 'hard' },
  { id: 'ken', name: 'Kenya', flag: '🇰🇪', continent: 'Africa', difficulty: 'hard' },
  { id: 'lso', name: 'Lesotho', flag: '🇱🇸', continent: 'Africa', difficulty: 'hard' },
  { id: 'lbr', name: 'Liberia', flag: '🇱🇷', continent: 'Africa', difficulty: 'hard' },
  { id: 'lby', name: 'Libya', flag: '🇱🇾', continent: 'Africa', difficulty: 'hard' },
  { id: 'mdg', name: 'Madagascar', flag: '🇲🇬', continent: 'Africa', difficulty: 'hard' },
  { id: 'mwi', name: 'Malawi', flag: '🇲🇼', continent: 'Africa', difficulty: 'hard' },
  { id: 'mli', name: 'Mali', flag: '🇲🇱', continent: 'Africa', difficulty: 'hard' },
  { id: 'mrt', name: 'Mauritania', flag: '🇲🇷', continent: 'Africa', difficulty: 'hard' },
  { id: 'mus', name: 'Mauritius', flag: '🇲🇺', continent: 'Africa', difficulty: 'hard' },
  { id: 'mar', name: 'Morocco', flag: '🇲🇦', continent: 'Africa', difficulty: 'medium' },
  { id: 'moz', name: 'Mozambique', flag: '🇲🇿', continent: 'Africa', difficulty: 'hard' },
  { id: 'nam', name: 'Namibia', flag: '🇳🇦', continent: 'Africa', difficulty: 'hard' },
  { id: 'ner', name: 'Niger', flag: '🇳🇪', continent: 'Africa', difficulty: 'hard' },
  { id: 'nga', name: 'Nigeria', flag: '🇳🇬', continent: 'Africa', difficulty: 'medium' },
  { id: 'rwa', name: 'Rwanda', flag: '🇷🇼', continent: 'Africa', difficulty: 'hard' },
  { id: 'stp', name: 'São Tomé and Príncipe', flag: '🇸🇹', continent: 'Africa', difficulty: 'hard' },
  { id: 'sen', name: 'Senegal', flag: '🇸🇳', continent: 'Africa', difficulty: 'hard' },
  { id: 'syc', name: 'Seychelles', flag: '🇸🇨', continent: 'Africa', difficulty: 'hard' },
  { id: 'sle', name: 'Sierra Leone', flag: '🇸🇱', continent: 'Africa', difficulty: 'hard' },
  { id: 'som', name: 'Somalia', flag: '🇸🇴', continent: 'Africa', difficulty: 'hard' },
  { id: 'zaf', name: 'South Africa', flag: '🇿🇦', continent: 'Africa', difficulty: 'medium' },
  { id: 'ssd', name: 'South Sudan', flag: '🇸🇸', continent: 'Africa', difficulty: 'hard' },
  { id: 'sdn', name: 'Sudan', flag: '🇸🇩', continent: 'Africa', difficulty: 'hard' },
  { id: 'swz', name: 'Eswatini', flag: '🇸🇿', continent: 'Africa', difficulty: 'hard' },
  { id: 'tza', name: 'Tanzania', flag: '🇹🇿', continent: 'Africa', difficulty: 'hard' },
  { id: 'tgo', name: 'Togo', flag: '🇹🇬', continent: 'Africa', difficulty: 'hard' },
  { id: 'tun', name: 'Tunisia', flag: '🇹🇳', continent: 'Africa', difficulty: 'hard' },
  { id: 'uga', name: 'Uganda', flag: '🇺🇬', continent: 'Africa', difficulty: 'hard' },
  { id: 'zmb', name: 'Zambia', flag: '🇿🇲', continent: 'Africa', difficulty: 'hard' },
  { id: 'zwe', name: 'Zimbabwe', flag: '🇿🇼', continent: 'Africa', difficulty: 'hard' },

  // Oceania
  { id: 'aus', name: 'Australia', flag: '🇦🇺', continent: 'Oceania', difficulty: 'easy' },
  { id: 'fji', name: 'Fiji', flag: '🇫🇯', continent: 'Oceania', difficulty: 'hard' },
  { id: 'kir', name: 'Kiribati', flag: '🇰🇮', continent: 'Oceania', difficulty: 'hard' },
  { id: 'mhl', name: 'Marshall Islands', flag: '🇲🇭', continent: 'Oceania', difficulty: 'hard' },
  { id: 'fsm', name: 'Micronesia', flag: '🇫🇲', continent: 'Oceania', difficulty: 'hard' },
  { id: 'nru', name: 'Nauru', flag: '🇳🇷', continent: 'Oceania', difficulty: 'hard' },
  { id: 'nzl', name: 'New Zealand', flag: '🇳🇿', continent: 'Oceania', difficulty: 'medium' },
  { id: 'plw', name: 'Palau', flag: '🇵🇼', continent: 'Oceania', difficulty: 'hard' },
  { id: 'png', name: 'Papua New Guinea', flag: '🇵🇬', continent: 'Oceania', difficulty: 'hard' },
  { id: 'wsm', name: 'Samoa', flag: '🇼🇸', continent: 'Oceania', difficulty: 'hard' },
  { id: 'slb', name: 'Solomon Islands', flag: '🇸🇧', continent: 'Oceania', difficulty: 'hard' },
  { id: 'ton', name: 'Tonga', flag: '🇹🇴', continent: 'Oceania', difficulty: 'hard' },
  { id: 'tuv', name: 'Tuvalu', flag: '🇹🇻', continent: 'Oceania', difficulty: 'hard' },
  { id: 'vut', name: 'Vanuatu', flag: '🇻🇺', continent: 'Oceania', difficulty: 'hard' }
];

// Function to get random countries
export const getRandomCountries = () => {
  // Shuffle and get 4 random countries from the entire list
  const shuffled = [...countries].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
};