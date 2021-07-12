export const person = [
    { id: "1", name: "Luke Skywalker" },
    { id: "2", name: "C-3PO" },
    { id: "3", name: "R2-D2 "},
    { id: "4", name: "Darth Vader" },
    { id: "5", name: "Leia Organa" },
    { id: "6", name: "Owen Lars" },
    { id: "7", name: "Beru Whitesun lars" },
  ];
  
  export default function getPerson() {
    return person.filter(p => p);
  }
  