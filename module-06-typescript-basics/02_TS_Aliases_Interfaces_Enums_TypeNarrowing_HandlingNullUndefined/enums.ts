enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Blue;
// console.log(myColor);

// function getAccess(role: string) {
//   if (role === 'admin') {
//     console.log('full access');
//   } else if (role === 'user') {
//     console.log('limited access');
//   } else {
//     console.log('no access');
//   }
// }

// getAccess('Admin');
// getAccess('adnim');

enum UserRole {
  Guest = 'guest',
  User = 'user',
  Admin = 'admin',
}

function getAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log('full access');
  } else if (role === UserRole.User) {
    console.log('limited access');
  } else {
    console.log('read only');
  }
}

getAccess(UserRole.Admin);
getAccess(UserRole.User);
getAccess(UserRole.Guest);

// getAccess('admin'); // error

enum OrderStatus {
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED',
  Cancelled = 'CANCELLED',
}

function updateOrder(status: OrderStatus) {
  console.log(`Order is now ${status}`);
}

updateOrder(OrderStatus.Shipped);
updateOrder(OrderStatus.Delivered);
// updateOrder('shipped');
