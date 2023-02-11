// import { PrismaClient } from '@prisma/client';
// const db = new PrismaClient();

// function getProducts() {
//   return [
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
//       name: 'Hohner Fun Top 120 Bass',
//       description:
//         '<p>The Hohner Fun Top button accordion was made in Italy. The Fun Top series was developed for stage use. It is a very stable, reliable and above all powerful instrument. The Hohner Fun Top was equipped with the Amplisound. </p> <p>The treble was equipped with 4 choirs. The sound of the treble can be changed via 5 registers. The treble register switches were placed on the back of the instrument. This allows for quick switching during play. The bass has 120 bass buttons and 5 bass registers. The sound production was realized by Tipo A Mano reedplates.</p><p>The Hohner Fun Top comes with a new Hohner backpack and new Hohner straps.</p>',
//       shortDescription: 'C-Griff Cassotto',
//       price: 8999,
//     },
//     {
//       id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
//       name: 'Hohner Amati De Luxe C-Griff',
//       description:
//         '<p>The used Hohner Amati C-system button accordion is in a very good condition. It was made in Germany.</p><p>The treble was equipped with 3 choirs and 62 buttons. The 3 choirs can be switched via 5 treble registers. The bass was equipped with 96 bass buttons.</p><p> The Hohner Amati button accordion comes with a new backpack and new straps (made in Italy).</p><p>Each used button accordion is completely overhauled in our workshop.</p>',

//       shortDescription: '3 chörig overhauled',
//       price: 1199,
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
//       name: 'Hohner Gola 414 120 Bass',
//       description:
//         '<p>The Hohner Gola was named after the accordion maker Giovanni Gola. Giovanni Gola was a master accordion builder. The perfection according to Giovanni Gola in combination with the highest quality raw materials makes the Hohner Gola a masterpiece.</p><p>The Hohner Gola 414 accordion was made in Germany. The treble is equipped with 4 choirs (4 8 8 16). The sound of the Hohner Gola can be changed by 11 stops. Two registers can be used to control the blinds in the treble. The Hohner Gola is equipped with A-Mano reeds. The bass has 120 bass buttons and 7 bass registers. 5 choirs were built in the bass.</p><p>The Hohner Gola comes with Hohner luxury straps and a Hohner hard case.</p><p>Each accordion is fully tested in our specialist workshop for hand-pulled instruments.</p>',

//       shortDescription: '4 chörig black Jalousie',
//       price: 34990,
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
//       name: 'Hohner Morino V S 120 Bass',
//       description:
//         '<p>The  Hohner Morino V S accordion is in excellent condition. The 120 bass accordion was made in Germany.</p><p>The treble was equipped with 5 choirs. The sound of the treble can be changed via 14 treble stops. The Hohner Morino VS has Musette tuning and a Cassotto shaft (in the treble). In addition, the Hohner Morino was equipped with piccolo voices. The bass has 120 bass buttons and 5 bass stops. The bass stops switch the 5 choirs of the 120 standard basses.</p><p>This beautiful Hohner Morino accordion comes with a used case and new accordion straps (made in Italy).</p><p>Every  accordion is completely overhauled and tuned in our professional workshop.</p>',

//       shortDescription: 'Perlmutt overhauled',
//       price: 6999,
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
//       name: 'Hohner Concerto II 72 Bass',
//       description:
//         '<p>This used Hohner Concerto II 72 Bass accordion was made in Germany. It is in excellent condition and was completely overhauled and tuned in our professional workshop.</p><p>The piano accordion has 34 keys and 72 basses. It can be switched between 1-chorus and 2-choruses. In addition there are 3 treble stops. The Concerto II comes with a used original case and new straps (Made in Italy).</p><p>Each accordion is completely checked and tuned in our specialized workshop for hand-pulled instruments.</p>',

//       shortDescription: '2 chörig overhauled',
//       price: 1099,
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
//       name: 'Cavagnolo 120 Bass B-Griff',
//       description:
//         '<p>The 120 Bass Cavagnolo B-grip button accordion is in very good condition. It was made in France.</p><p>The treble was equipped with 4 choirs (4 8 16). In addition, it was equipped with a cassotto shaft. The 4 and the 16 foot are in the cassotto. The bass has 5 choirs and 120 bass buttons.</p><p>The Cavagnolo B-grip button accordion comes with a new backpack (made in Italy) and new straps (made in Italy).</p><p>Each used button accordion is completely overhauled in our workshop.</p>',

//       shortDescription: '4 chörig overhauled',
//       price: 2899,
//     },
//   ];
// }

// function getImages() {
//   return [
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
//       fileName: 'hohner-fun-top-120-bass-1.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17211',
//       fileName: 'hohner-fun-top-120-bass-2.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
//       fileName: 'hohner-fun-top-120-bass-3.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
//       fileName: 'hohner-fun-top-120-bass-4.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
//       fileName: 'hohner-fun-top-120-bass-5.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17233',
//       fileName: 'hohner-amati-c-griff-1.jpg',
//       productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
//       fileName: 'hohner-amati-c-griff-2.jpg',
//       productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17999',
//       fileName: 'hohner-amati-c-griff-3.jpg',
//       productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17002',
//       fileName: 'hohner-amati-c-griff-4.jpg',
//       productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17554',
//       fileName: 'hohner-amati-c-griff-5.jpg',
//       productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
//       fileName: 'hohner-gola-414-120-bass-1.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17268',
//       fileName: 'hohner-gola-414-120-bass-2.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17269',
//       fileName: 'hohner-gola-414-120-bass-3.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17270',
//       fileName: 'hohner-gola-414-120-bass-4.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17271',
//       fileName: 'hohner-gola-414-120-bass-5.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17272',
//       fileName: 'hohner-morino-v-s-120-bass-1.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17273',
//       fileName: 'hohner-morino-v-s-120-bass-2.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17274',
//       fileName: 'hohner-morino-v-s-120-bass-3.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17275',
//       fileName: 'hohner-morino-v-s-120-bass-4.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17276',
//       fileName: 'hohner-morino-v-s-120-bass-5.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17277',
//       fileName: 'hohner-concerto-ii-72-bass-1.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17278',
//       fileName: 'hohner-concerto-ii-72-bass-2.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17279',
//       fileName: 'hohner-concerto-ii-72-bass-3.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17280',
//       fileName: 'hohner-concerto-ii-72-bass-4.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17281',
//       fileName: 'hohner-concerto-ii-72-bass-5.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17282',
//       fileName: 'cavagnolo-120-bass-b-griff-1.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17283',
//       fileName: 'cavagnolo-120-bass-b-griff-2.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17284',
//       fileName: 'cavagnolo-120-bass-b-griff-3.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17285',
//       fileName: 'cavagnolo-120-bass-b-griff-4.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
//     },
//     {
//       id: 'fd105551-0f0d-4a9f-bc41-c559c8a17286',
//       fileName: 'cavagnolo-120-bass-b-griff-5.jpg',
//       productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
//     },
//   ];
// }

// async function seed() {
//   await Promise.all(
//     getProducts().map((product) => {
//       return db.product.create({ data: product });
//     }),
//   );

//   await Promise.all(
//     getImages().map(({ productId, ...imageData }) => {
//       return db.image.create({
//         data: {
//           ...imageData,
//           product: {
//             connect: { id: productId },
//           },
//         },
//       });
//     }),
//   );
// }

// seed();
