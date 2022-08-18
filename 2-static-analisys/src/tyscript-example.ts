/** @format */

type User = {



  name: {



    first: string;
    middle: string;
    last: string;
  };
};

const add = (a: number, b: number) => a + b;

function getFullName(user: User): string {
  const {
    name: { first, middle, last },
  } = user;

  return [first, middle, last].filter(Boolean).join('');
}

add(1, 6);

getFullName({ name: { first: 'Joe', middle: 'Bug', last: 'Matthews' } });
