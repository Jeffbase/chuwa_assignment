/*

Question 1

Given the following array and implement the table dynamically

*/

const createItem = (type, data, attribute) => {
  let t = document.createElement(type);
  t.textContent = data;
  if (attribute) {
    t.setAttribute("value", attribute);
  }
  return t;
};

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
let body = document.querySelector("body");
let table = document.querySelector(".table");
//add header
let tr_header = document.createElement("tr");
console.log(tr_header);
table.appendChild(tr_header);
tableHeader = tableInfo["tableHeader"].map((element) => {
  console.log(element);
  return createItem("th", element);
});

tr_header.append(...tableHeader);

//add content
tableInfo["tableContent"].forEach((element) => {
  let content = document.createElement("tr");
  content.appendChild(createItem("td", element["Student Name"]));
  content.appendChild(createItem("td", element["Age"]));
  content.appendChild(createItem("td", element["Phone"]));
  content.appendChild(createItem("td", element["Address"]));

  table.appendChild(content);
});

/*
  
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let ol = document.createElement("ol");
let ul = document.createElement("ul");

const ulListNodes = list.map((ele) => {
  return createItem("li", ele);
});
const olListNodes = list.map((ele) => {
  return createItem("li", ele);
});

ol.append(...olListNodes);

ul.append(...ulListNodes);
body.appendChild(ol);
body.appendChild(ul);

/*
  
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let dropDownListEle = document.createElement("select");
let dropDownNodes = dropDownList.map(({ value, content }) => {
  return createItem("option", content, value);
});
dropDownListEle.append(...dropDownNodes);
body.appendChild(dropDownListEle);
