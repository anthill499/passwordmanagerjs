const SIA_KEYWORDS = [
  "drop",
  "DROP",
  "FROM",
  "from",
  "*",
  "select",
  "SELECT",
  "ASCII",
  "ascii",
  "UNION",
  "union",
  "field",
  "FIELD",
  "COLLATE",
  "collate",
  "sql",
  "SQL",
  "admin",
  "ADMIN",
  "admin",
  "1=1",
  "('1'='1--",
  "MD5",
  "GROUP BY",
  "group by",
  "having",
  "HAVING",
  "table",
  "TABLE",
  "*",
  "bypass",
  "blacklisting",
  ";",
  "INSERT",
  "insert",
  "EXEC",
  "exec",
  "RECONFIGURE",
  "reconfigure",
  "ISNULL",
  "isnull",
  "SUBSTRING",
  "substring",
  "WHEN",
  "SCHEMA",
  "schema",
  "VERSION",
  "version",
  "CONCAT",
  "concat",
];

const specChar = "#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

const hasSpecChar = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (specChar.indexOf(word[i]) !== -1) return true;
  }
  return false;
};

const hasSqlTerms = (string) => {
  const filtered = SIA_KEYWORDS.filter((term) => string.indexOf(term) !== -1);
  return filtered.length >= 2 ? true : false;
};

module.exports = {
  hasSpecChar,
  hasSqlTerms,
};
