const fetch = require("node-fetch");

// fetch(
//   "http://wearedevelopers-com.github.io/code100/puzzles/eventblock/events.json"
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     drawEvent(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const drawEvent = (data) => {
//   let { columns, padChar, events } = data;

//   console.log(`\n` + padChar.repeat(columns));
// };

let data = [
  {
    fieldList: [
      {
        fieldList: [
          {
            fieldList: [
              {
                fieldList: [
                  {
                    fieldList: [
                      {
                        fieldList: [],
                        field: "Field06",
                        value: "10011",
                        itemName: "[10011] หัวหน้างานส่วนการพนักงาน ส่วนกลาง",
                        description: "OrgStructure Field Reference 02",
                        masterName: "OFR02",
                        level: 6,
                        fieldName: "OFR02",
                      },
                    ],
                    field: "Field05",
                    value: "1013",
                    itemName: "[1013] Central Rattanabhibeth",
                    description: "OrgStructure Field Reference 01",
                    masterName: "OFR01",
                    level: 5,
                    fieldName: "OFR01",
                  },
                ],
                field: "Field04",
                value: "ET03",
                itemName: "[ET03] Employee Type 03",
                description: "OrgStructure Field Reference 04",
                masterName: "OFR04",
                level: 4,
                fieldName: "OFR04",
              },
            ],
            field: "Field03",
            value: "003",
            itemName: "Cost Centre 003",
            description: "Cost Center",
            masterName: "CostCentre",
            level: 3,
            fieldName: "CostCentreCode",
          },
        ],
        field: "Field02",
        value: "IDHR",
        itemName: "Human Resource (Indonesia)",
        description: "Department",
        masterName: "Department",
        level: 2,
        fieldName: "DepartmentCode",
      },
      {
        fieldList: [
          {
            fieldList: [
              {
                fieldList: [
                  {
                    fieldList: [
                      {
                        fieldList: [],
                        field: "Field06",
                        value: "10040",
                        itemName: "[10040] พนักงานสวนการพนักงาน พัฒนาและอบรม",
                        description: "OrgStructure Field Reference 02",
                        masterName: "OFR02",
                        level: 6,
                        fieldName: "OFR02",
                      },
                    ],
                    field: "Field05",
                    value: "1012",
                    itemName: "[1012] Central Westgate",
                    description: "OrgStructure Field Reference 01",
                    masterName: "OFR01",
                    level: 5,
                    fieldName: "OFR01",
                  },
                ],
                field: "Field04",
                value: "ET02",
                itemName: "[ET02] Employee Type 02",
                description: "OrgStructure Field Reference 04",
                masterName: "OFR04",
                level: 4,
                fieldName: "OFR04",
              },
            ],
            field: "Field03",
            value: "002",
            itemName: "Cost Centre 002",
            description: "Cost Center",
            masterName: "CostCentre",
            level: 3,
            fieldName: "CostCentreCode",
          },
        ],
        field: "Field02",
        value: "THHR",
        itemName: "Human Resource (Thailand)",
        description: "Department",
        masterName: "Department",
        level: 2,
        fieldName: "DepartmentCode",
      },
      {
        fieldList: [
          {
            fieldList: [
              {
                fieldList: [
                  {
                    fieldList: [
                      {
                        fieldList: [],
                        field: "Field06",
                        value: "10050",
                        itemName:
                          "[10050] พนักงานส่วนการพนักงาน วัดและประเมินผล",
                        description: "OrgStructure Field Reference 02",
                        masterName: "OFR02",
                        level: 6,
                        fieldName: "OFR02",
                      },
                    ],
                    field: "Field05",
                    value: "1013",
                    itemName: "[1013] Central Rattanabhibeth",
                    description: "OrgStructure Field Reference 01",
                    masterName: "OFR01",
                    level: 5,
                    fieldName: "OFR01",
                  },
                ],
                field: "Field04",
                value: "ET02",
                itemName: "[ET02] Employee Type 02",
                description: "OrgStructure Field Reference 04",
                masterName: "OFR04",
                level: 4,
                fieldName: "OFR04",
              },
            ],
            field: "Field03",
            value: "003",
            itemName: "Cost Centre 003",
            description: "Cost Center",
            masterName: "CostCentre",
            level: 3,
            fieldName: "CostCentreCode",
          },
        ],
        field: "Field02",
        value: "THMKT",
        itemName: "Marketing (Thailand)",
        description: "Department",
        masterName: "Department",
        level: 2,
        fieldName: "DepartmentCode",
      },
    ],
    field: "Field01",
    value: "BSG",
    itemName: "BIPO Singapore",
    description: "Company",
    masterName: "Company",
    level: 1,
    fieldName: "CompanyCode",
  },
];

// Custom sorting function based on the "value" property
const customSort = (a, b) => {
  const getValue = (item) => {
    if (item.fieldList && item.fieldList.length > 0) {
      // Recursively find the value in the nested structure
      return getValue(item.fieldList[0]);
    }
    return item.value;
  };

  const valueA = getValue(a);
  const valueB = getValue(b);

  return valueB.localeCompare(valueA);
};

// Sort the array using the custom sorting function
data.sort(customSort);

console.log(data);
