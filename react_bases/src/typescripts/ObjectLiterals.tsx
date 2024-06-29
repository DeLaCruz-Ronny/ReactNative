interface Person {
  fullname: string;
  lastname: string;
  isAlive?: boolean; // ? => Significa que es opcional
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

const ObjectLiterals = () => {
  const person: Person = {
    fullname: "Ronny",
    lastname: "De La Cruz",
    age: 28,
    address: {
      country: "RD",
      houseNo: 12,
    },
  };

  return (
    <>
      <h3>Obejetos Literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

export default ObjectLiterals;
