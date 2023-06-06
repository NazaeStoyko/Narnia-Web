// Завдання 1:
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Parameters must be numbers');
    }
    
    return width * height;
  }
  
  try {
    const width = 10;
    const height = 5;
    const area = calcRectangleArea(width, height);
    console.log('Rectangle area:', area);
  } catch (error) {
    console.log('Error:', error.message);
  }

// // Завдання 2:
// function checkAge() {
//     const age = prompt('Enter your age:');
    
//     try {
//       if (age === '') {
//         throw new Error('The field is empty! Please enter your age');
//       }
      
//       if (isNaN(age)) {
//         throw new Error('Invalid age! Please enter a number');
//       }
      
//       if (parseInt(age) < 14) {
//         throw new Error('You are too young to watch the movie');
//       }
      
//       alert('You can watch the movie');
//     } catch (error) {
//       alert('Error: ' + error.message);
//     }
//   }
  
//   checkAge();

// //Завдання 3
//  function showUser(id) {
//   if (id < 0) {
//     throw new Error('ID must not be negative');
//   }
  
//   return { id };
// }

// function showUsers(ids) {
//   const validUsers = [];
  
//   for (let id of ids) {
//     try {
//       const user = showUser(id);
//       validUsers.push(user);
//     } catch (error) {
//       console.log('Error:', error.message);
//     }
//   }
  
//   return validUsers;
// }

// const users = showUsers([7, -12, 44, 22]);
// console.log(users);


// //Завдання 4:
// class MonthException {
//     constructor(message) {
//       this.name = 'MonthException';
//       this.message = message;
//     }
//   }
  
//   function showMonthName(month) {
//     const months = [
//       'January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];
    
//     if (month < 1 || month > 12) {
//       throw new MonthException('Incorrect month number');
//     }
    
//     return months[month - 1];
//   }
  
//   try {
//     console.log(showMonthName(5));
//     console.log(showMonthName(14));
//   } catch (error) {
//     console.log(error.name, error.message);
//   }