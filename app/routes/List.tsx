// react needs unique id for array of objects to keep track and render them
function List() {
// {id: 1, name: "apple", calories: 70}, ...
// const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>);
// return(<ol>{listItems}</ol>)
}
export default List;

// import { useState, useEffect } from 'react';

// const CustomerDetails = ({ customerId }) => {
//   const [customerData, setCustomerData] = useState(null);

//   useEffect(() => {
//     const fetchCustomerData = async () => {
//       const query = `
//         query {
//           customer(id: "${customerId}") {
//             id
//             firstName
//             lastName
//             email
//             orders(first: 5) {
//               edges {
//                 node {
//                   id
//                   name
//                   totalPrice
//                 }
//               }
//             }
//           }
//         }
//       `;

//       const response = await fetch('/shopify-graphql-endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${yourShopifyAccessToken}`,
//         },
//         body: JSON.stringify({ query }),
//       });

//       const data = await response.json();
//       setCustomerData(data);
//     };

//     fetchCustomerData();
//   }, [customerId]);  // Fetch data when the customerId changes

//   if (!customerData) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{customerData.customer.firstName} {customerData.customer.lastName}</h1>
//       <p>Email: {customerData.customer.email}</p>
//       {/* Render more customer data here */}
//     </div>
//   );
// };

// export default CustomerDetails;
