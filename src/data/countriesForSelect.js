/* 
С помощью сервиса онлайн конвертации excel to Json (http://beautifytools.com/excel-to-json-converter.php) получил данные по странам, которые находятся в массиве "IMRfromExcel".
Далее преобразовываю данные в формат, который понимает компонент Select из semantic-ui.
*/


const countriesFromExcel = [
  {
      "ISO Code": "AFG",
      "Country Name": "Afghanistan"
  },
  {
      "ISO Code": "AFG",
      "Country Name": "Afghanistan"
  },
  {
      "ISO Code": "AFG",
      "Country Name": "Afghanistan"
  },
  {
      "ISO Code": "ALB",
      "Country Name": "Albania"
  },
  {
      "ISO Code": "ALB",
      "Country Name": "Albania"
  },
  {
      "ISO Code": "ALB",
      "Country Name": "Albania"
  },
  {
      "ISO Code": "DZA",
      "Country Name": "Algeria"
  },
  {
      "ISO Code": "DZA",
      "Country Name": "Algeria"
  },
  {
      "ISO Code": "DZA",
      "Country Name": "Algeria"
  },
  {
      "ISO Code": "AND",
      "Country Name": "Andorra"
  },
  {
      "ISO Code": "AND",
      "Country Name": "Andorra"
  },
  {
      "ISO Code": "AND",
      "Country Name": "Andorra"
  },
  {
      "ISO Code": "AGO",
      "Country Name": "Angola"
  },
  {
      "ISO Code": "AGO",
      "Country Name": "Angola"
  },
  {
      "ISO Code": "AGO",
      "Country Name": "Angola"
  },
  {
      "ISO Code": "ATG",
      "Country Name": "Antigua and Barbuda"
  },
  {
      "ISO Code": "ATG",
      "Country Name": "Antigua and Barbuda"
  },
  {
      "ISO Code": "ATG",
      "Country Name": "Antigua and Barbuda"
  },
  {
      "ISO Code": "ARG",
      "Country Name": "Argentina"
  },
  {
      "ISO Code": "ARG",
      "Country Name": "Argentina"
  },
  {
      "ISO Code": "ARG",
      "Country Name": "Argentina"
  },
  {
      "ISO Code": "ARM",
      "Country Name": "Armenia"
  },
  {
      "ISO Code": "ARM",
      "Country Name": "Armenia"
  },
  {
      "ISO Code": "ARM",
      "Country Name": "Armenia"
  },
  {
      "ISO Code": "AUS",
      "Country Name": "Australia"
  },
  {
      "ISO Code": "AUS",
      "Country Name": "Australia"
  },
  {
      "ISO Code": "AUS",
      "Country Name": "Australia"
  },
  {
      "ISO Code": "AUT",
      "Country Name": "Austria"
  },
  {
      "ISO Code": "AUT",
      "Country Name": "Austria"
  },
  {
      "ISO Code": "AUT",
      "Country Name": "Austria"
  },
  {
      "ISO Code": "AZE",
      "Country Name": "Azerbaijan"
  },
  {
      "ISO Code": "AZE",
      "Country Name": "Azerbaijan"
  },
  {
      "ISO Code": "AZE",
      "Country Name": "Azerbaijan"
  },
  {
      "ISO Code": "BHS",
      "Country Name": "Bahamas"
  },
  {
      "ISO Code": "BHS",
      "Country Name": "Bahamas"
  },
  {
      "ISO Code": "BHS",
      "Country Name": "Bahamas"
  },
  {
      "ISO Code": "BHR",
      "Country Name": "Bahrain"
  },
  {
      "ISO Code": "BHR",
      "Country Name": "Bahrain"
  },
  {
      "ISO Code": "BHR",
      "Country Name": "Bahrain"
  },
  {
      "ISO Code": "BGD",
      "Country Name": "Bangladesh"
  },
  {
      "ISO Code": "BGD",
      "Country Name": "Bangladesh"
  },
  {
      "ISO Code": "BGD",
      "Country Name": "Bangladesh"
  },
  {
      "ISO Code": "BRB",
      "Country Name": "Barbados"
  },
  {
      "ISO Code": "BRB",
      "Country Name": "Barbados"
  },
  {
      "ISO Code": "BRB",
      "Country Name": "Barbados"
  },
  {
      "ISO Code": "BLR",
      "Country Name": "Belarus"
  },
  {
      "ISO Code": "BLR",
      "Country Name": "Belarus"
  },
  {
      "ISO Code": "BLR",
      "Country Name": "Belarus"
  },
  {
      "ISO Code": "BEL",
      "Country Name": "Belgium"
  },
  {
      "ISO Code": "BEL",
      "Country Name": "Belgium"
  },
  {
      "ISO Code": "BEL",
      "Country Name": "Belgium"
  },
  {
      "ISO Code": "BLZ",
      "Country Name": "Belize"
  },
  {
      "ISO Code": "BLZ",
      "Country Name": "Belize"
  },
  {
      "ISO Code": "BLZ",
      "Country Name": "Belize"
  },
  {
      "ISO Code": "BEN",
      "Country Name": "Benin"
  },
  {
      "ISO Code": "BEN",
      "Country Name": "Benin"
  },
  {
      "ISO Code": "BEN",
      "Country Name": "Benin"
  },
  {
      "ISO Code": "BTN",
      "Country Name": "Bhutan"
  },
  {
      "ISO Code": "BTN",
      "Country Name": "Bhutan"
  },
  {
      "ISO Code": "BTN",
      "Country Name": "Bhutan"
  },
  {
      "ISO Code": "BOL",
      "Country Name": "Bolivia (Plurinational State of)"
  },
  {
      "ISO Code": "BOL",
      "Country Name": "Bolivia (Plurinational State of)"
  },
  {
      "ISO Code": "BOL",
      "Country Name": "Bolivia (Plurinational State of)"
  },
  {
      "ISO Code": "BIH",
      "Country Name": "Bosnia and Herzegovina"
  },
  {
      "ISO Code": "BIH",
      "Country Name": "Bosnia and Herzegovina"
  },
  {
      "ISO Code": "BIH",
      "Country Name": "Bosnia and Herzegovina"
  },
  {
      "ISO Code": "BWA",
      "Country Name": "Botswana"
  },
  {
      "ISO Code": "BWA",
      "Country Name": "Botswana"
  },
  {
      "ISO Code": "BWA",
      "Country Name": "Botswana"
  },
  {
      "ISO Code": "BRA",
      "Country Name": "Brazil"
  },
  {
      "ISO Code": "BRA",
      "Country Name": "Brazil"
  },
  {
      "ISO Code": "BRA",
      "Country Name": "Brazil"
  },
  {
      "ISO Code": "BRN",
      "Country Name": "Brunei Darussalam"
  },
  {
      "ISO Code": "BRN",
      "Country Name": "Brunei Darussalam"
  },
  {
      "ISO Code": "BRN",
      "Country Name": "Brunei Darussalam"
  },
  {
      "ISO Code": "BGR",
      "Country Name": "Bulgaria"
  },
  {
      "ISO Code": "BGR",
      "Country Name": "Bulgaria"
  },
  {
      "ISO Code": "BGR",
      "Country Name": "Bulgaria"
  },
  {
      "ISO Code": "BFA",
      "Country Name": "Burkina Faso"
  },
  {
      "ISO Code": "BFA",
      "Country Name": "Burkina Faso"
  },
  {
      "ISO Code": "BFA",
      "Country Name": "Burkina Faso"
  },
  {
      "ISO Code": "BDI",
      "Country Name": "Burundi"
  },
  {
      "ISO Code": "BDI",
      "Country Name": "Burundi"
  },
  {
      "ISO Code": "BDI",
      "Country Name": "Burundi"
  },
  {
      "ISO Code": "CIV",
      "Country Name": "Cote d'Ivoire"
  },
  {
      "ISO Code": "CIV",
      "Country Name": "Cote d'Ivoire"
  },
  {
      "ISO Code": "CIV",
      "Country Name": "Cote d'Ivoire"
  },
  {
      "ISO Code": "CPV",
      "Country Name": "Cabo Verde"
  },
  {
      "ISO Code": "CPV",
      "Country Name": "Cabo Verde"
  },
  {
      "ISO Code": "CPV",
      "Country Name": "Cabo Verde"
  },
  {
      "ISO Code": "KHM",
      "Country Name": "Cambodia"
  },
  {
      "ISO Code": "KHM",
      "Country Name": "Cambodia"
  },
  {
      "ISO Code": "KHM",
      "Country Name": "Cambodia"
  },
  {
      "ISO Code": "CMR",
      "Country Name": "Cameroon"
  },
  {
      "ISO Code": "CMR",
      "Country Name": "Cameroon"
  },
  {
      "ISO Code": "CMR",
      "Country Name": "Cameroon"
  },
  {
      "ISO Code": "CAN",
      "Country Name": "Canada"
  },
  {
      "ISO Code": "CAN",
      "Country Name": "Canada"
  },
  {
      "ISO Code": "CAN",
      "Country Name": "Canada"
  },
  {
      "ISO Code": "CAF",
      "Country Name": "Central African Republic"
  },
  {
      "ISO Code": "CAF",
      "Country Name": "Central African Republic"
  },
  {
      "ISO Code": "CAF",
      "Country Name": "Central African Republic"
  },
  {
      "ISO Code": "TCD",
      "Country Name": "Chad"
  },
  {
      "ISO Code": "TCD",
      "Country Name": "Chad"
  },
  {
      "ISO Code": "TCD",
      "Country Name": "Chad"
  },
  {
      "ISO Code": "CHL",
      "Country Name": "Chile"
  },
  {
      "ISO Code": "CHL",
      "Country Name": "Chile"
  },
  {
      "ISO Code": "CHL",
      "Country Name": "Chile"
  },
  {
      "ISO Code": "CHN",
      "Country Name": "China"
  },
  {
      "ISO Code": "CHN",
      "Country Name": "China"
  },
  {
      "ISO Code": "CHN",
      "Country Name": "China"
  },
  {
      "ISO Code": "COL",
      "Country Name": "Colombia"
  },
  {
      "ISO Code": "COL",
      "Country Name": "Colombia"
  },
  {
      "ISO Code": "COL",
      "Country Name": "Colombia"
  },
  {
      "ISO Code": "COM",
      "Country Name": "Comoros"
  },
  {
      "ISO Code": "COM",
      "Country Name": "Comoros"
  },
  {
      "ISO Code": "COM",
      "Country Name": "Comoros"
  },
  {
      "ISO Code": "COG",
      "Country Name": "Congo"
  },
  {
      "ISO Code": "COG",
      "Country Name": "Congo"
  },
  {
      "ISO Code": "COG",
      "Country Name": "Congo"
  },
  {
      "ISO Code": "COK",
      "Country Name": "Cook Islands"
  },
  {
      "ISO Code": "COK",
      "Country Name": "Cook Islands"
  },
  {
      "ISO Code": "COK",
      "Country Name": "Cook Islands"
  },
  {
      "ISO Code": "CRI",
      "Country Name": "Costa Rica"
  },
  {
      "ISO Code": "CRI",
      "Country Name": "Costa Rica"
  },
  {
      "ISO Code": "CRI",
      "Country Name": "Costa Rica"
  },
  {
      "ISO Code": "HRV",
      "Country Name": "Croatia"
  },
  {
      "ISO Code": "HRV",
      "Country Name": "Croatia"
  },
  {
      "ISO Code": "HRV",
      "Country Name": "Croatia"
  },
  {
      "ISO Code": "CUB",
      "Country Name": "Cuba"
  },
  {
      "ISO Code": "CUB",
      "Country Name": "Cuba"
  },
  {
      "ISO Code": "CUB",
      "Country Name": "Cuba"
  },
  {
      "ISO Code": "CYP",
      "Country Name": "Cyprus"
  },
  {
      "ISO Code": "CYP",
      "Country Name": "Cyprus"
  },
  {
      "ISO Code": "CYP",
      "Country Name": "Cyprus"
  },
  {
      "ISO Code": "CZE",
      "Country Name": "Czechia"
  },
  {
      "ISO Code": "CZE",
      "Country Name": "Czechia"
  },
  {
      "ISO Code": "CZE",
      "Country Name": "Czechia"
  },
  {
      "ISO Code": "PRK",
      "Country Name": "Democratic People's Republic of Korea"
  },
  {
      "ISO Code": "PRK",
      "Country Name": "Democratic People's Republic of Korea"
  },
  {
      "ISO Code": "PRK",
      "Country Name": "Democratic People's Republic of Korea"
  },
  {
      "ISO Code": "COD",
      "Country Name": "Democratic Republic of the Congo"
  },
  {
      "ISO Code": "COD",
      "Country Name": "Democratic Republic of the Congo"
  },
  {
      "ISO Code": "COD",
      "Country Name": "Democratic Republic of the Congo"
  },
  {
      "ISO Code": "DNK",
      "Country Name": "Denmark"
  },
  {
      "ISO Code": "DNK",
      "Country Name": "Denmark"
  },
  {
      "ISO Code": "DNK",
      "Country Name": "Denmark"
  },
  {
      "ISO Code": "DJI",
      "Country Name": "Djibouti"
  },
  {
      "ISO Code": "DJI",
      "Country Name": "Djibouti"
  },
  {
      "ISO Code": "DJI",
      "Country Name": "Djibouti"
  },
  {
      "ISO Code": "DMA",
      "Country Name": "Dominica"
  },
  {
      "ISO Code": "DMA",
      "Country Name": "Dominica"
  },
  {
      "ISO Code": "DMA",
      "Country Name": "Dominica"
  },
  {
      "ISO Code": "DOM",
      "Country Name": "Dominican Republic"
  },
  {
      "ISO Code": "DOM",
      "Country Name": "Dominican Republic"
  },
  {
      "ISO Code": "DOM",
      "Country Name": "Dominican Republic"
  },
  {
      "ISO Code": "ECU",
      "Country Name": "Ecuador"
  },
  {
      "ISO Code": "ECU",
      "Country Name": "Ecuador"
  },
  {
      "ISO Code": "ECU",
      "Country Name": "Ecuador"
  },
  {
      "ISO Code": "EGY",
      "Country Name": "Egypt"
  },
  {
      "ISO Code": "EGY",
      "Country Name": "Egypt"
  },
  {
      "ISO Code": "EGY",
      "Country Name": "Egypt"
  },
  {
      "ISO Code": "SLV",
      "Country Name": "El Salvador"
  },
  {
      "ISO Code": "SLV",
      "Country Name": "El Salvador"
  },
  {
      "ISO Code": "SLV",
      "Country Name": "El Salvador"
  },
  {
      "ISO Code": "GNQ",
      "Country Name": "Equatorial Guinea"
  },
  {
      "ISO Code": "GNQ",
      "Country Name": "Equatorial Guinea"
  },
  {
      "ISO Code": "GNQ",
      "Country Name": "Equatorial Guinea"
  },
  {
      "ISO Code": "ERI",
      "Country Name": "Eritrea"
  },
  {
      "ISO Code": "ERI",
      "Country Name": "Eritrea"
  },
  {
      "ISO Code": "ERI",
      "Country Name": "Eritrea"
  },
  {
      "ISO Code": "EST",
      "Country Name": "Estonia"
  },
  {
      "ISO Code": "EST",
      "Country Name": "Estonia"
  },
  {
      "ISO Code": "EST",
      "Country Name": "Estonia"
  },
  {
      "ISO Code": "SWZ",
      "Country Name": "Eswatini"
  },
  {
      "ISO Code": "SWZ",
      "Country Name": "Eswatini"
  },
  {
      "ISO Code": "SWZ",
      "Country Name": "Eswatini"
  },
  {
      "ISO Code": "ETH",
      "Country Name": "Ethiopia"
  },
  {
      "ISO Code": "ETH",
      "Country Name": "Ethiopia"
  },
  {
      "ISO Code": "ETH",
      "Country Name": "Ethiopia"
  },
  {
      "ISO Code": "FJI",
      "Country Name": "Fiji"
  },
  {
      "ISO Code": "FJI",
      "Country Name": "Fiji"
  },
  {
      "ISO Code": "FJI",
      "Country Name": "Fiji"
  },
  {
      "ISO Code": "FIN",
      "Country Name": "Finland"
  },
  {
      "ISO Code": "FIN",
      "Country Name": "Finland"
  },
  {
      "ISO Code": "FIN",
      "Country Name": "Finland"
  },
  {
      "ISO Code": "FRA",
      "Country Name": "France"
  },
  {
      "ISO Code": "FRA",
      "Country Name": "France"
  },
  {
      "ISO Code": "FRA",
      "Country Name": "France"
  },
  {
      "ISO Code": "GAB",
      "Country Name": "Gabon"
  },
  {
      "ISO Code": "GAB",
      "Country Name": "Gabon"
  },
  {
      "ISO Code": "GAB",
      "Country Name": "Gabon"
  },
  {
      "ISO Code": "GMB",
      "Country Name": "Gambia"
  },
  {
      "ISO Code": "GMB",
      "Country Name": "Gambia"
  },
  {
      "ISO Code": "GMB",
      "Country Name": "Gambia"
  },
  {
      "ISO Code": "GEO",
      "Country Name": "Georgia"
  },
  {
      "ISO Code": "GEO",
      "Country Name": "Georgia"
  },
  {
      "ISO Code": "GEO",
      "Country Name": "Georgia"
  },
  {
      "ISO Code": "DEU",
      "Country Name": "Germany"
  },
  {
      "ISO Code": "DEU",
      "Country Name": "Germany"
  },
  {
      "ISO Code": "DEU",
      "Country Name": "Germany"
  },
  {
      "ISO Code": "GHA",
      "Country Name": "Ghana"
  },
  {
      "ISO Code": "GHA",
      "Country Name": "Ghana"
  },
  {
      "ISO Code": "GHA",
      "Country Name": "Ghana"
  },
  {
      "ISO Code": "GRC",
      "Country Name": "Greece"
  },
  {
      "ISO Code": "GRC",
      "Country Name": "Greece"
  },
  {
      "ISO Code": "GRC",
      "Country Name": "Greece"
  },
  {
      "ISO Code": "GRD",
      "Country Name": "Grenada"
  },
  {
      "ISO Code": "GRD",
      "Country Name": "Grenada"
  },
  {
      "ISO Code": "GRD",
      "Country Name": "Grenada"
  },
  {
      "ISO Code": "GTM",
      "Country Name": "Guatemala"
  },
  {
      "ISO Code": "GTM",
      "Country Name": "Guatemala"
  },
  {
      "ISO Code": "GTM",
      "Country Name": "Guatemala"
  },
  {
      "ISO Code": "GIN",
      "Country Name": "Guinea"
  },
  {
      "ISO Code": "GIN",
      "Country Name": "Guinea"
  },
  {
      "ISO Code": "GIN",
      "Country Name": "Guinea"
  },
  {
      "ISO Code": "GNB",
      "Country Name": "Guinea-Bissau"
  },
  {
      "ISO Code": "GNB",
      "Country Name": "Guinea-Bissau"
  },
  {
      "ISO Code": "GNB",
      "Country Name": "Guinea-Bissau"
  },
  {
      "ISO Code": "GUY",
      "Country Name": "Guyana"
  },
  {
      "ISO Code": "GUY",
      "Country Name": "Guyana"
  },
  {
      "ISO Code": "GUY",
      "Country Name": "Guyana"
  },
  {
      "ISO Code": "HTI",
      "Country Name": "Haiti"
  },
  {
      "ISO Code": "HTI",
      "Country Name": "Haiti"
  },
  {
      "ISO Code": "HTI",
      "Country Name": "Haiti"
  },
  {
      "ISO Code": "HND",
      "Country Name": "Honduras"
  },
  {
      "ISO Code": "HND",
      "Country Name": "Honduras"
  },
  {
      "ISO Code": "HND",
      "Country Name": "Honduras"
  },
  {
      "ISO Code": "HUN",
      "Country Name": "Hungary"
  },
  {
      "ISO Code": "HUN",
      "Country Name": "Hungary"
  },
  {
      "ISO Code": "HUN",
      "Country Name": "Hungary"
  },
  {
      "ISO Code": "ISL",
      "Country Name": "Iceland"
  },
  {
      "ISO Code": "ISL",
      "Country Name": "Iceland"
  },
  {
      "ISO Code": "ISL",
      "Country Name": "Iceland"
  },
  {
      "ISO Code": "IND",
      "Country Name": "India"
  },
  {
      "ISO Code": "IND",
      "Country Name": "India"
  },
  {
      "ISO Code": "IND",
      "Country Name": "India"
  },
  {
      "ISO Code": "IDN",
      "Country Name": "Indonesia"
  },
  {
      "ISO Code": "IDN",
      "Country Name": "Indonesia"
  },
  {
      "ISO Code": "IDN",
      "Country Name": "Indonesia"
  },
  {
      "ISO Code": "IRN",
      "Country Name": "Iran (Islamic Republic of)"
  },
  {
      "ISO Code": "IRN",
      "Country Name": "Iran (Islamic Republic of)"
  },
  {
      "ISO Code": "IRN",
      "Country Name": "Iran (Islamic Republic of)"
  },
  {
      "ISO Code": "IRQ",
      "Country Name": "Iraq"
  },
  {
      "ISO Code": "IRQ",
      "Country Name": "Iraq"
  },
  {
      "ISO Code": "IRQ",
      "Country Name": "Iraq"
  },
  {
      "ISO Code": "IRL",
      "Country Name": "Ireland"
  },
  {
      "ISO Code": "IRL",
      "Country Name": "Ireland"
  },
  {
      "ISO Code": "IRL",
      "Country Name": "Ireland"
  },
  {
      "ISO Code": "ISR",
      "Country Name": "Israel"
  },
  {
      "ISO Code": "ISR",
      "Country Name": "Israel"
  },
  {
      "ISO Code": "ISR",
      "Country Name": "Israel"
  },
  {
      "ISO Code": "ITA",
      "Country Name": "Italy"
  },
  {
      "ISO Code": "ITA",
      "Country Name": "Italy"
  },
  {
      "ISO Code": "ITA",
      "Country Name": "Italy"
  },
  {
      "ISO Code": "JAM",
      "Country Name": "Jamaica"
  },
  {
      "ISO Code": "JAM",
      "Country Name": "Jamaica"
  },
  {
      "ISO Code": "JAM",
      "Country Name": "Jamaica"
  },
  {
      "ISO Code": "JPN",
      "Country Name": "Japan"
  },
  {
      "ISO Code": "JPN",
      "Country Name": "Japan"
  },
  {
      "ISO Code": "JPN",
      "Country Name": "Japan"
  },
  {
      "ISO Code": "JOR",
      "Country Name": "Jordan"
  },
  {
      "ISO Code": "JOR",
      "Country Name": "Jordan"
  },
  {
      "ISO Code": "JOR",
      "Country Name": "Jordan"
  },
  {
      "ISO Code": "KAZ",
      "Country Name": "Kazakhstan"
  },
  {
      "ISO Code": "KAZ",
      "Country Name": "Kazakhstan"
  },
  {
      "ISO Code": "KAZ",
      "Country Name": "Kazakhstan"
  },
  {
      "ISO Code": "KEN",
      "Country Name": "Kenya"
  },
  {
      "ISO Code": "KEN",
      "Country Name": "Kenya"
  },
  {
      "ISO Code": "KEN",
      "Country Name": "Kenya"
  },
  {
      "ISO Code": "KIR",
      "Country Name": "Kiribati"
  },
  {
      "ISO Code": "KIR",
      "Country Name": "Kiribati"
  },
  {
      "ISO Code": "KIR",
      "Country Name": "Kiribati"
  },
  {
      "ISO Code": "KWT",
      "Country Name": "Kuwait"
  },
  {
      "ISO Code": "KWT",
      "Country Name": "Kuwait"
  },
  {
      "ISO Code": "KWT",
      "Country Name": "Kuwait"
  },
  {
      "ISO Code": "KGZ",
      "Country Name": "Kyrgyzstan"
  },
  {
      "ISO Code": "KGZ",
      "Country Name": "Kyrgyzstan"
  },
  {
      "ISO Code": "KGZ",
      "Country Name": "Kyrgyzstan"
  },
  {
      "ISO Code": "LAO",
      "Country Name": "Lao People's Democratic Republic"
  },
  {
      "ISO Code": "LAO",
      "Country Name": "Lao People's Democratic Republic"
  },
  {
      "ISO Code": "LAO",
      "Country Name": "Lao People's Democratic Republic"
  },
  {
      "ISO Code": "LVA",
      "Country Name": "Latvia"
  },
  {
      "ISO Code": "LVA",
      "Country Name": "Latvia"
  },
  {
      "ISO Code": "LVA",
      "Country Name": "Latvia"
  },
  {
      "ISO Code": "LBN",
      "Country Name": "Lebanon"
  },
  {
      "ISO Code": "LBN",
      "Country Name": "Lebanon"
  },
  {
      "ISO Code": "LBN",
      "Country Name": "Lebanon"
  },
  {
      "ISO Code": "LSO",
      "Country Name": "Lesotho"
  },
  {
      "ISO Code": "LSO",
      "Country Name": "Lesotho"
  },
  {
      "ISO Code": "LSO",
      "Country Name": "Lesotho"
  },
  {
      "ISO Code": "LBR",
      "Country Name": "Liberia"
  },
  {
      "ISO Code": "LBR",
      "Country Name": "Liberia"
  },
  {
      "ISO Code": "LBR",
      "Country Name": "Liberia"
  },
  {
      "ISO Code": "LBY",
      "Country Name": "Libya"
  },
  {
      "ISO Code": "LBY",
      "Country Name": "Libya"
  },
  {
      "ISO Code": "LBY",
      "Country Name": "Libya"
  },
  {
      "ISO Code": "LIE",
      "Country Name": "Liechtenstein"
  },
  {
      "ISO Code": "LIE",
      "Country Name": "Liechtenstein"
  },
  {
      "ISO Code": "LIE",
      "Country Name": "Liechtenstein"
  },
  {
      "ISO Code": "LTU",
      "Country Name": "Lithuania"
  },
  {
      "ISO Code": "LTU",
      "Country Name": "Lithuania"
  },
  {
      "ISO Code": "LTU",
      "Country Name": "Lithuania"
  },
  {
      "ISO Code": "LUX",
      "Country Name": "Luxembourg"
  },
  {
      "ISO Code": "LUX",
      "Country Name": "Luxembourg"
  },
  {
      "ISO Code": "LUX",
      "Country Name": "Luxembourg"
  },
  {
      "ISO Code": "MDG",
      "Country Name": "Madagascar"
  },
  {
      "ISO Code": "MDG",
      "Country Name": "Madagascar"
  },
  {
      "ISO Code": "MDG",
      "Country Name": "Madagascar"
  },
  {
      "ISO Code": "MWI",
      "Country Name": "Malawi"
  },
  {
      "ISO Code": "MWI",
      "Country Name": "Malawi"
  },
  {
      "ISO Code": "MWI",
      "Country Name": "Malawi"
  },
  {
      "ISO Code": "MYS",
      "Country Name": "Malaysia"
  },
  {
      "ISO Code": "MYS",
      "Country Name": "Malaysia"
  },
  {
      "ISO Code": "MYS",
      "Country Name": "Malaysia"
  },
  {
      "ISO Code": "MDV",
      "Country Name": "Maldives"
  },
  {
      "ISO Code": "MDV",
      "Country Name": "Maldives"
  },
  {
      "ISO Code": "MDV",
      "Country Name": "Maldives"
  },
  {
      "ISO Code": "MLI",
      "Country Name": "Mali"
  },
  {
      "ISO Code": "MLI",
      "Country Name": "Mali"
  },
  {
      "ISO Code": "MLI",
      "Country Name": "Mali"
  },
  {
      "ISO Code": "MLT",
      "Country Name": "Malta"
  },
  {
      "ISO Code": "MLT",
      "Country Name": "Malta"
  },
  {
      "ISO Code": "MLT",
      "Country Name": "Malta"
  },
  {
      "ISO Code": "MHL",
      "Country Name": "Marshall Islands"
  },
  {
      "ISO Code": "MHL",
      "Country Name": "Marshall Islands"
  },
  {
      "ISO Code": "MHL",
      "Country Name": "Marshall Islands"
  },
  {
      "ISO Code": "MRT",
      "Country Name": "Mauritania"
  },
  {
      "ISO Code": "MRT",
      "Country Name": "Mauritania"
  },
  {
      "ISO Code": "MRT",
      "Country Name": "Mauritania"
  },
  {
      "ISO Code": "MUS",
      "Country Name": "Mauritius"
  },
  {
      "ISO Code": "MUS",
      "Country Name": "Mauritius"
  },
  {
      "ISO Code": "MUS",
      "Country Name": "Mauritius"
  },
  {
      "ISO Code": "MEX",
      "Country Name": "Mexico"
  },
  {
      "ISO Code": "MEX",
      "Country Name": "Mexico"
  },
  {
      "ISO Code": "MEX",
      "Country Name": "Mexico"
  },
  {
      "ISO Code": "FSM",
      "Country Name": "Micronesia (Federated States of)"
  },
  {
      "ISO Code": "FSM",
      "Country Name": "Micronesia (Federated States of)"
  },
  {
      "ISO Code": "FSM",
      "Country Name": "Micronesia (Federated States of)"
  },
  {
      "ISO Code": "MCO",
      "Country Name": "Monaco"
  },
  {
      "ISO Code": "MCO",
      "Country Name": "Monaco"
  },
  {
      "ISO Code": "MCO",
      "Country Name": "Monaco"
  },
  {
      "ISO Code": "MNG",
      "Country Name": "Mongolia"
  },
  {
      "ISO Code": "MNG",
      "Country Name": "Mongolia"
  },
  {
      "ISO Code": "MNG",
      "Country Name": "Mongolia"
  },
  {
      "ISO Code": "MNE",
      "Country Name": "Montenegro"
  },
  {
      "ISO Code": "MNE",
      "Country Name": "Montenegro"
  },
  {
      "ISO Code": "MNE",
      "Country Name": "Montenegro"
  },
  {
      "ISO Code": "MAR",
      "Country Name": "Morocco"
  },
  {
      "ISO Code": "MAR",
      "Country Name": "Morocco"
  },
  {
      "ISO Code": "MAR",
      "Country Name": "Morocco"
  },
  {
      "ISO Code": "MOZ",
      "Country Name": "Mozambique"
  },
  {
      "ISO Code": "MOZ",
      "Country Name": "Mozambique"
  },
  {
      "ISO Code": "MOZ",
      "Country Name": "Mozambique"
  },
  {
      "ISO Code": "MMR",
      "Country Name": "Myanmar"
  },
  {
      "ISO Code": "MMR",
      "Country Name": "Myanmar"
  },
  {
      "ISO Code": "MMR",
      "Country Name": "Myanmar"
  },
  {
      "ISO Code": "NAM",
      "Country Name": "Namibia"
  },
  {
      "ISO Code": "NAM",
      "Country Name": "Namibia"
  },
  {
      "ISO Code": "NAM",
      "Country Name": "Namibia"
  },
  {
      "ISO Code": "NRU",
      "Country Name": "Nauru"
  },
  {
      "ISO Code": "NRU",
      "Country Name": "Nauru"
  },
  {
      "ISO Code": "NRU",
      "Country Name": "Nauru"
  },
  {
      "ISO Code": "NPL",
      "Country Name": "Nepal"
  },
  {
      "ISO Code": "NPL",
      "Country Name": "Nepal"
  },
  {
      "ISO Code": "NPL",
      "Country Name": "Nepal"
  },
  {
      "ISO Code": "NLD",
      "Country Name": "Netherlands"
  },
  {
      "ISO Code": "NLD",
      "Country Name": "Netherlands"
  },
  {
      "ISO Code": "NLD",
      "Country Name": "Netherlands"
  },
  {
      "ISO Code": "NZL",
      "Country Name": "New Zealand"
  },
  {
      "ISO Code": "NZL",
      "Country Name": "New Zealand"
  },
  {
      "ISO Code": "NZL",
      "Country Name": "New Zealand"
  },
  {
      "ISO Code": "NIC",
      "Country Name": "Nicaragua"
  },
  {
      "ISO Code": "NIC",
      "Country Name": "Nicaragua"
  },
  {
      "ISO Code": "NIC",
      "Country Name": "Nicaragua"
  },
  {
      "ISO Code": "NER",
      "Country Name": "Niger"
  },
  {
      "ISO Code": "NER",
      "Country Name": "Niger"
  },
  {
      "ISO Code": "NER",
      "Country Name": "Niger"
  },
  {
      "ISO Code": "NGA",
      "Country Name": "Nigeria"
  },
  {
      "ISO Code": "NGA",
      "Country Name": "Nigeria"
  },
  {
      "ISO Code": "NGA",
      "Country Name": "Nigeria"
  },
  {
      "ISO Code": "NIU",
      "Country Name": "Niue"
  },
  {
      "ISO Code": "NIU",
      "Country Name": "Niue"
  },
  {
      "ISO Code": "NIU",
      "Country Name": "Niue"
  },
  {
      "ISO Code": "NOR",
      "Country Name": "Norway"
  },
  {
      "ISO Code": "NOR",
      "Country Name": "Norway"
  },
  {
      "ISO Code": "NOR",
      "Country Name": "Norway"
  },
  {
      "ISO Code": "OMN",
      "Country Name": "Oman"
  },
  {
      "ISO Code": "OMN",
      "Country Name": "Oman"
  },
  {
      "ISO Code": "OMN",
      "Country Name": "Oman"
  },
  {
      "ISO Code": "PAK",
      "Country Name": "Pakistan"
  },
  {
      "ISO Code": "PAK",
      "Country Name": "Pakistan"
  },
  {
      "ISO Code": "PAK",
      "Country Name": "Pakistan"
  },
  {
      "ISO Code": "PLW",
      "Country Name": "Palau"
  },
  {
      "ISO Code": "PLW",
      "Country Name": "Palau"
  },
  {
      "ISO Code": "PLW",
      "Country Name": "Palau"
  },
  {
      "ISO Code": "PAN",
      "Country Name": "Panama"
  },
  {
      "ISO Code": "PAN",
      "Country Name": "Panama"
  },
  {
      "ISO Code": "PAN",
      "Country Name": "Panama"
  },
  {
      "ISO Code": "PNG",
      "Country Name": "Papua New Guinea"
  },
  {
      "ISO Code": "PNG",
      "Country Name": "Papua New Guinea"
  },
  {
      "ISO Code": "PNG",
      "Country Name": "Papua New Guinea"
  },
  {
      "ISO Code": "PRY",
      "Country Name": "Paraguay"
  },
  {
      "ISO Code": "PRY",
      "Country Name": "Paraguay"
  },
  {
      "ISO Code": "PRY",
      "Country Name": "Paraguay"
  },
  {
      "ISO Code": "PER",
      "Country Name": "Peru"
  },
  {
      "ISO Code": "PER",
      "Country Name": "Peru"
  },
  {
      "ISO Code": "PER",
      "Country Name": "Peru"
  },
  {
      "ISO Code": "PHL",
      "Country Name": "Philippines"
  },
  {
      "ISO Code": "PHL",
      "Country Name": "Philippines"
  },
  {
      "ISO Code": "PHL",
      "Country Name": "Philippines"
  },
  {
      "ISO Code": "POL",
      "Country Name": "Poland"
  },
  {
      "ISO Code": "POL",
      "Country Name": "Poland"
  },
  {
      "ISO Code": "POL",
      "Country Name": "Poland"
  },
  {
      "ISO Code": "PRT",
      "Country Name": "Portugal"
  },
  {
      "ISO Code": "PRT",
      "Country Name": "Portugal"
  },
  {
      "ISO Code": "PRT",
      "Country Name": "Portugal"
  },
  {
      "ISO Code": "QAT",
      "Country Name": "Qatar"
  },
  {
      "ISO Code": "QAT",
      "Country Name": "Qatar"
  },
  {
      "ISO Code": "QAT",
      "Country Name": "Qatar"
  },
  {
      "ISO Code": "KOR",
      "Country Name": "Republic of Korea"
  },
  {
      "ISO Code": "KOR",
      "Country Name": "Republic of Korea"
  },
  {
      "ISO Code": "KOR",
      "Country Name": "Republic of Korea"
  },
  {
      "ISO Code": "MDA",
      "Country Name": "Republic of Moldova"
  },
  {
      "ISO Code": "MDA",
      "Country Name": "Republic of Moldova"
  },
  {
      "ISO Code": "MDA",
      "Country Name": "Republic of Moldova"
  },
  {
      "ISO Code": "ROU",
      "Country Name": "Romania"
  },
  {
      "ISO Code": "ROU",
      "Country Name": "Romania"
  },
  {
      "ISO Code": "ROU",
      "Country Name": "Romania"
  },
  {
      "ISO Code": "RUS",
      "Country Name": "Russian Federation"
  },
  {
      "ISO Code": "RUS",
      "Country Name": "Russian Federation"
  },
  {
      "ISO Code": "RUS",
      "Country Name": "Russian Federation"
  },
  {
      "ISO Code": "RWA",
      "Country Name": "Rwanda"
  },
  {
      "ISO Code": "RWA",
      "Country Name": "Rwanda"
  },
  {
      "ISO Code": "RWA",
      "Country Name": "Rwanda"
  },
  {
      "ISO Code": "KNA",
      "Country Name": "Saint Kitts and Nevis"
  },
  {
      "ISO Code": "KNA",
      "Country Name": "Saint Kitts and Nevis"
  },
  {
      "ISO Code": "KNA",
      "Country Name": "Saint Kitts and Nevis"
  },
  {
      "ISO Code": "LCA",
      "Country Name": "Saint Lucia"
  },
  {
      "ISO Code": "LCA",
      "Country Name": "Saint Lucia"
  },
  {
      "ISO Code": "LCA",
      "Country Name": "Saint Lucia"
  },
  {
      "ISO Code": "VCT",
      "Country Name": "Saint Vincent and the Grenadines"
  },
  {
      "ISO Code": "VCT",
      "Country Name": "Saint Vincent and the Grenadines"
  },
  {
      "ISO Code": "VCT",
      "Country Name": "Saint Vincent and the Grenadines"
  },
  {
      "ISO Code": "WSM",
      "Country Name": "Samoa"
  },
  {
      "ISO Code": "WSM",
      "Country Name": "Samoa"
  },
  {
      "ISO Code": "WSM",
      "Country Name": "Samoa"
  },
  {
      "ISO Code": "SMR",
      "Country Name": "San Marino"
  },
  {
      "ISO Code": "SMR",
      "Country Name": "San Marino"
  },
  {
      "ISO Code": "SMR",
      "Country Name": "San Marino"
  },
  {
      "ISO Code": "STP",
      "Country Name": "Sao Tome and Principe"
  },
  {
      "ISO Code": "STP",
      "Country Name": "Sao Tome and Principe"
  },
  {
      "ISO Code": "STP",
      "Country Name": "Sao Tome and Principe"
  },
  {
      "ISO Code": "SAU",
      "Country Name": "Saudi Arabia"
  },
  {
      "ISO Code": "SAU",
      "Country Name": "Saudi Arabia"
  },
  {
      "ISO Code": "SAU",
      "Country Name": "Saudi Arabia"
  },
  {
      "ISO Code": "SEN",
      "Country Name": "Senegal"
  },
  {
      "ISO Code": "SEN",
      "Country Name": "Senegal"
  },
  {
      "ISO Code": "SEN",
      "Country Name": "Senegal"
  },
  {
      "ISO Code": "SRB",
      "Country Name": "Serbia"
  },
  {
      "ISO Code": "SRB",
      "Country Name": "Serbia"
  },
  {
      "ISO Code": "SRB",
      "Country Name": "Serbia"
  },
  {
      "ISO Code": "SYC",
      "Country Name": "Seychelles"
  },
  {
      "ISO Code": "SYC",
      "Country Name": "Seychelles"
  },
  {
      "ISO Code": "SYC",
      "Country Name": "Seychelles"
  },
  {
      "ISO Code": "SLE",
      "Country Name": "Sierra Leone"
  },
  {
      "ISO Code": "SLE",
      "Country Name": "Sierra Leone"
  },
  {
      "ISO Code": "SLE",
      "Country Name": "Sierra Leone"
  },
  {
      "ISO Code": "SGP",
      "Country Name": "Singapore"
  },
  {
      "ISO Code": "SGP",
      "Country Name": "Singapore"
  },
  {
      "ISO Code": "SGP",
      "Country Name": "Singapore"
  },
  {
      "ISO Code": "SVK",
      "Country Name": "Slovakia"
  },
  {
      "ISO Code": "SVK",
      "Country Name": "Slovakia"
  },
  {
      "ISO Code": "SVK",
      "Country Name": "Slovakia"
  },
  {
      "ISO Code": "SVN",
      "Country Name": "Slovenia"
  },
  {
      "ISO Code": "SVN",
      "Country Name": "Slovenia"
  },
  {
      "ISO Code": "SVN",
      "Country Name": "Slovenia"
  },
  {
      "ISO Code": "SLB",
      "Country Name": "Solomon Islands"
  },
  {
      "ISO Code": "SLB",
      "Country Name": "Solomon Islands"
  },
  {
      "ISO Code": "SLB",
      "Country Name": "Solomon Islands"
  },
  {
      "ISO Code": "SOM",
      "Country Name": "Somalia"
  },
  {
      "ISO Code": "SOM",
      "Country Name": "Somalia"
  },
  {
      "ISO Code": "SOM",
      "Country Name": "Somalia"
  },
  {
      "ISO Code": "ZAF",
      "Country Name": "South Africa"
  },
  {
      "ISO Code": "ZAF",
      "Country Name": "South Africa"
  },
  {
      "ISO Code": "ZAF",
      "Country Name": "South Africa"
  },
  {
      "ISO Code": "SSD",
      "Country Name": "South Sudan"
  },
  {
      "ISO Code": "SSD",
      "Country Name": "South Sudan"
  },
  {
      "ISO Code": "SSD",
      "Country Name": "South Sudan"
  },
  {
      "ISO Code": "ESP",
      "Country Name": "Spain"
  },
  {
      "ISO Code": "ESP",
      "Country Name": "Spain"
  },
  {
      "ISO Code": "ESP",
      "Country Name": "Spain"
  },
  {
      "ISO Code": "LKA",
      "Country Name": "Sri Lanka"
  },
  {
      "ISO Code": "LKA",
      "Country Name": "Sri Lanka"
  },
  {
      "ISO Code": "LKA",
      "Country Name": "Sri Lanka"
  },
  {
      "ISO Code": "PSE",
      "Country Name": "State of Palestine"
  },
  {
      "ISO Code": "PSE",
      "Country Name": "State of Palestine"
  },
  {
      "ISO Code": "PSE",
      "Country Name": "State of Palestine"
  },
  {
      "ISO Code": "SDN",
      "Country Name": "Sudan"
  },
  {
      "ISO Code": "SDN",
      "Country Name": "Sudan"
  },
  {
      "ISO Code": "SDN",
      "Country Name": "Sudan"
  },
  {
      "ISO Code": "SUR",
      "Country Name": "Suriname"
  },
  {
      "ISO Code": "SUR",
      "Country Name": "Suriname"
  },
  {
      "ISO Code": "SUR",
      "Country Name": "Suriname"
  },
  {
      "ISO Code": "SWE",
      "Country Name": "Sweden"
  },
  {
      "ISO Code": "SWE",
      "Country Name": "Sweden"
  },
  {
      "ISO Code": "SWE",
      "Country Name": "Sweden"
  },
  {
      "ISO Code": "CHE",
      "Country Name": "Switzerland"
  },
  {
      "ISO Code": "CHE",
      "Country Name": "Switzerland"
  },
  {
      "ISO Code": "CHE",
      "Country Name": "Switzerland"
  },
  {
      "ISO Code": "SYR",
      "Country Name": "Syrian Arab Republic"
  },
  {
      "ISO Code": "SYR",
      "Country Name": "Syrian Arab Republic"
  },
  {
      "ISO Code": "SYR",
      "Country Name": "Syrian Arab Republic"
  },
  {
      "ISO Code": "TJK",
      "Country Name": "Tajikistan"
  },
  {
      "ISO Code": "TJK",
      "Country Name": "Tajikistan"
  },
  {
      "ISO Code": "TJK",
      "Country Name": "Tajikistan"
  },
  {
      "ISO Code": "THA",
      "Country Name": "Thailand"
  },
  {
      "ISO Code": "THA",
      "Country Name": "Thailand"
  },
  {
      "ISO Code": "THA",
      "Country Name": "Thailand"
  },
  {
      "ISO Code": "MKD",
      "Country Name": "The former Yugoslav Republic of Macedonia"
  },
  {
      "ISO Code": "MKD",
      "Country Name": "The former Yugoslav Republic of Macedonia"
  },
  {
      "ISO Code": "MKD",
      "Country Name": "The former Yugoslav Republic of Macedonia"
  },
  {
      "ISO Code": "TLS",
      "Country Name": "Timor-Leste"
  },
  {
      "ISO Code": "TLS",
      "Country Name": "Timor-Leste"
  },
  {
      "ISO Code": "TLS",
      "Country Name": "Timor-Leste"
  },
  {
      "ISO Code": "TGO",
      "Country Name": "Togo"
  },
  {
      "ISO Code": "TGO",
      "Country Name": "Togo"
  },
  {
      "ISO Code": "TGO",
      "Country Name": "Togo"
  },
  {
      "ISO Code": "TON",
      "Country Name": "Tonga"
  },
  {
      "ISO Code": "TON",
      "Country Name": "Tonga"
  },
  {
      "ISO Code": "TON",
      "Country Name": "Tonga"
  },
  {
      "ISO Code": "TTO",
      "Country Name": "Trinidad and Tobago"
  },
  {
      "ISO Code": "TTO",
      "Country Name": "Trinidad and Tobago"
  },
  {
      "ISO Code": "TTO",
      "Country Name": "Trinidad and Tobago"
  },
  {
      "ISO Code": "TUN",
      "Country Name": "Tunisia"
  },
  {
      "ISO Code": "TUN",
      "Country Name": "Tunisia"
  },
  {
      "ISO Code": "TUN",
      "Country Name": "Tunisia"
  },
  {
      "ISO Code": "TUR",
      "Country Name": "Turkey"
  },
  {
      "ISO Code": "TUR",
      "Country Name": "Turkey"
  },
  {
      "ISO Code": "TUR",
      "Country Name": "Turkey"
  },
  {
      "ISO Code": "TKM",
      "Country Name": "Turkmenistan"
  },
  {
      "ISO Code": "TKM",
      "Country Name": "Turkmenistan"
  },
  {
      "ISO Code": "TKM",
      "Country Name": "Turkmenistan"
  },
  {
      "ISO Code": "TUV",
      "Country Name": "Tuvalu"
  },
  {
      "ISO Code": "TUV",
      "Country Name": "Tuvalu"
  },
  {
      "ISO Code": "TUV",
      "Country Name": "Tuvalu"
  },
  {
      "ISO Code": "UGA",
      "Country Name": "Uganda"
  },
  {
      "ISO Code": "UGA",
      "Country Name": "Uganda"
  },
  {
      "ISO Code": "UGA",
      "Country Name": "Uganda"
  },
  {
      "ISO Code": "UKR",
      "Country Name": "Ukraine"
  },
  {
      "ISO Code": "UKR",
      "Country Name": "Ukraine"
  },
  {
      "ISO Code": "UKR",
      "Country Name": "Ukraine"
  },
  {
      "ISO Code": "ARE",
      "Country Name": "United Arab Emirates"
  },
  {
      "ISO Code": "ARE",
      "Country Name": "United Arab Emirates"
  },
  {
      "ISO Code": "ARE",
      "Country Name": "United Arab Emirates"
  },
  {
      "ISO Code": "GBR",
      "Country Name": "United Kingdom"
  },
  {
      "ISO Code": "GBR",
      "Country Name": "United Kingdom"
  },
  {
      "ISO Code": "GBR",
      "Country Name": "United Kingdom"
  },
  {
      "ISO Code": "TZA",
      "Country Name": "United Republic of Tanzania"
  },
  {
      "ISO Code": "TZA",
      "Country Name": "United Republic of Tanzania"
  },
  {
      "ISO Code": "TZA",
      "Country Name": "United Republic of Tanzania"
  },
  {
      "ISO Code": "USA",
      "Country Name": "United States"
  },
  {
      "ISO Code": "USA",
      "Country Name": "United States"
  },
  {
      "ISO Code": "USA",
      "Country Name": "United States"
  },
  {
      "ISO Code": "URY",
      "Country Name": "Uruguay"
  },
  {
      "ISO Code": "URY",
      "Country Name": "Uruguay"
  },
  {
      "ISO Code": "URY",
      "Country Name": "Uruguay"
  },
  {
      "ISO Code": "UZB",
      "Country Name": "Uzbekistan"
  },
  {
      "ISO Code": "UZB",
      "Country Name": "Uzbekistan"
  },
  {
      "ISO Code": "UZB",
      "Country Name": "Uzbekistan"
  },
  {
      "ISO Code": "VUT",
      "Country Name": "Vanuatu"
  },
  {
      "ISO Code": "VUT",
      "Country Name": "Vanuatu"
  },
  {
      "ISO Code": "VUT",
      "Country Name": "Vanuatu"
  },
  {
      "ISO Code": "VEN",
      "Country Name": "Venezuela (Bolivarian Republic of)**"
  },
  {
      "ISO Code": "VEN",
      "Country Name": "Venezuela (Bolivarian Republic of)**"
  },
  {
      "ISO Code": "VEN",
      "Country Name": "Venezuela (Bolivarian Republic of)**"
  },
  {
      "ISO Code": "VNM",
      "Country Name": "Viet Nam"
  },
  {
      "ISO Code": "VNM",
      "Country Name": "Viet Nam"
  },
  {
      "ISO Code": "VNM",
      "Country Name": "Viet Nam"
  },
  {
      "ISO Code": "YEM",
      "Country Name": "Yemen"
  },
  {
      "ISO Code": "YEM",
      "Country Name": "Yemen"
  },
  {
      "ISO Code": "YEM",
      "Country Name": "Yemen"
  },
  {
      "ISO Code": "ZMB",
      "Country Name": "Zambia"
  },
  {
      "ISO Code": "ZMB",
      "Country Name": "Zambia"
  },
  {
      "ISO Code": "ZMB",
      "Country Name": "Zambia"
  },
  {
      "ISO Code": "ZWE",
      "Country Name": "Zimbabwe"
  },
  {
      "ISO Code": "ZWE",
      "Country Name": "Zimbabwe"
  },
  {
      "ISO Code": "ZWE",
      "Country Name": "Zimbabwe"
  }
];

function convertDataFromExcelToSelect(CountryDataFromExcel) {
  let convertedDataForSelect = CountryDataFromExcel.map(item => {
      return {
      key: item['ISO Code'],
      text: item['Country Name'],
      value: item['Country Name'],
      }
  });

  let finishedDataForSelect = [];

  for (let i = 0; i < convertedDataForSelect.length; i = (i + 3)) {
      finishedDataForSelect.push(convertedDataForSelect[i]);
  };

  return finishedDataForSelect;
}

export default convertDataFromExcelToSelect(countriesFromExcel);
