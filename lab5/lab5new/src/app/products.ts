export interface Product {
  image: string
  name: string;
  description: string;
  rating: number;
  link: string;
  category: string;
  likes: number;
  id: number;
}

export const products : Product[]= [
  {
    image:  "https://resources.cdn-kaspi.kz/img/m/p/h9a/h38/64155625488414.jpg?format=gallery-medium",
    name: 'Книга Камю А.: Посторонний',
    description: 'iSBN: 9785171373238',
    rating: 5,
    link: "https://kaspi.kz/shop/p/kamju-a-postoronnii-102030325/?c=750000000",
    category: "camus",
    likes: 10,
    id: 1,
    
    
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h2b/h43/63814674087966.jpg?format=gallery-medium" ,
    name: "Книга Камю А.: Чума",
    description: "iSBN: 978-5-17-103587-7" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/kamju-a-chuma-26001564/?c=750000000",
    category:"camus" ,
    likes: 2,
    id: 2,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h29/h98/64366958837790.jpg?format=gallery-medium" ,
    name: "Книга Камю А.: Падение",
    description: "iSBN: 9785171373245" , 
    rating: 3 ,
    link: "https://kaspi.kz/shop/p/kamju-a-padenie-103455806/?c=750000000",
    category:"camus" ,
    likes: 1 ,
    id:3 ,
    
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha6/hbf/80422266830878.jpg?format=gallery-medium" ,
    name: "Книга Камю А.: Посторонний",
    description: "iSBN: 978-5-17-154683-0" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/kamju-a-postoronnii-110040340/?c=750000000",
    category:"camus" ,
    likes: 1,
    id:4 ,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd6/h1e/63981628293150.jpg?format=gallery-medium" ,
    name: "Книга Камю А.: Счастливая смерть",
    description: "iSBN: 9785171373252" , 
    rating:5 ,
    link: "https://kaspi.kz/shop/p/kamju-a-schastlivaja-smert--102557138/?c=750000000",
    category:"camus" ,
    likes: 0,
    id: 5,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1a/hb4/64342870753310.jpg?format=gallery-medium" ,
    name: "Книга Кристи А.: Убийства по алфавиту",
    description: "iSBN: 9785040996957" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000",
    category:"christie" ,
    likes: 36,
    id: 6,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/he2/hf8/63844380803102.jpg?format=gallery-medium" ,
    name: "Книга Кристи А.: Убийство в Восточном экспрессе",
    description: "iSBN: 9785040992478" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/kristi-a-ubiistvo-v-vostochnom-ekspresse-100015045/?c=750000000",
    category:"christie" ,
    likes: 32,
    id:7 ,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hb9/63823581806622.jpg?format=gallery-medium" ,
    name: "Книга Кристи А.: Труп в библиотеке",
    description: "iSBN: 9785041035075" , 
    rating:5 ,
    link: "https://kaspi.kz/shop/p/kristi-a-trup-v-biblioteke-100015178/?c=750000000",
    category:"christie" ,
    likes: 10,
    id:8 ,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h04/hc9/64527116894238.jpg?format=gallery-medium" ,
    name: "Книга Кристи А.: Свидание со смертью",
    description: "iSBN: 978-5-04-101207-6" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/kristi-a-svidanie-so-smert-ju-105071827/?c=750000000",
    category:"christie" ,
    likes: 10 ,
    id: 9,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/hb1/h44/64441169379358.jpg?format=gallery-medium" ,
    name: "Книга Кристи А.: Смерть в облаках",
    description: "iSBN: 9785041609832" , 
    rating: 5 ,
    link: "https://kaspi.kz/shop/p/kristi-a-smert-v-oblakah-104528516/?c=750000000",
    category:"christie" ,
    likes: 12,
    id: 10,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h38/h4b/64342519021598.jpg?format=gallery-medium" ,
    name: "Книга Достоевский Ф. М.: Преступление и наказание",
    description: "iSBN: 9785170906307" , 
    rating: 5 ,
    link: "https://kaspi.kz/shop/p/dostoevskii-f-m-prestuplenie-i-nakazanie-101475338/?c=750000000",
    category:"dostoevsky" ,
    likes: 13,
    id: 11,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/hba/hf2/64366163820574.jpg?format=gallery-medium" ,
    name: "Книга Достоевский Ф.М.: Идиот",
    description: "iSBN: 9785171464844" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/dostoevskii-f-m-idiot-103455708/?c=750000000",
    category:"dostoevsky" ,
    likes: 5,
    id:12 ,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha0/hf1/64342382641182.jpg?format=gallery-medium" ,
    name: "Книга Достоевский Ф. М.: Белые ночи",
    description: "iSBN: 9785171065751" , 
    rating: 4.7,
    link: "https://kaspi.kz/shop/p/dostoevskii-f-m-belye-nochi-101542854/?c=750000000",
    category:"dostoevsky" ,
    likes: 11,
    id: 13,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/hcb/hbe/63952381575198.jpg?format=gallery-medium" ,
    name: "Книга Достоевский Ф. М.: Братья Карамазовы",
    description: "iSBN: 9785171391294" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/dostoevskii-f-m-brat-ja-karamazovy-102245589/?c=750000000",
    category:"dostoevsky" ,
    likes: 5,
    id: 14,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h03/h41/63844404920350.jpg?format=gallery-medium" ,
    name: "Книга Достоевский Ф. М.: Игрок",
    description: "iSBN: 9785171030902" , 
    rating:5 ,
    link: "https://kaspi.kz/shop/p/dostoevskii-f-m-igrok-100342947/?c=750000000",
    category:"dostoevsky" ,
    likes: 3,
    id: 15,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/hdb/hb6/64224569065502.jpg?format=gallery-medium" ,
    name: "Книга Мураками Х.: Норвежский лес",
    description: "iSBN: 9785041123710" , 
    rating:5 ,
    link: "https://kaspi.kz/shop/p/murakami-h-norvezhskii-les-101149190/?c=750000000",
    category:"murakami" ,
    likes:13 ,
    id: 16,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h83/hf6/63977120825374.jpg?format=gallery-medium" ,
    name: "Книга Мураками Х.: Охота на овец",
    description: "iSBN: 978-5-04-114216-2" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/murakami-h-ohota-na-ovets-100953177/?c=750000000",
    category:"murakami" ,
    likes: 4 ,
    id: 17,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h37/h63/79430741491742.jpg?format=gallery-medium" ,
    name: "Книга Мураками Х.: Слушай песню ветра. Пинбол 1973",
    description: "iSBN: 978-5-04-176594-1" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/murakami-h-slushai-pesnju-vetra-pinbol-1973-109599111/?c=750000000",
    category:"murakami" ,
    likes: 2,
    id: 18,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/hbd/hb4/63885172834334.jpg?format=gallery-medium" ,
    name: "Книга Мураками Х.: О чем я говорю, когда говорю о беге",
    description: "iSBN: 9785041123659" , 
    rating: 4.6 ,
    link: "https://kaspi.kz/shop/p/murakami-h-o-chem-ja-govorju-kogda-govorju-o-bege-100474428/?c=750000000",
    category:"murakami" ,
    likes:2,
    id: 19,
  },
  {
    image: "https://resources.cdn-kaspi.kz/img/m/p/h14/h84/63888829612062.jpg?format=gallery-medium" ,
    name: "Книга Мураками Х.: Медленной шлюпкой в Китай",
    description: "iSBN: 9785041107079" , 
    rating: 5,
    link: "https://kaspi.kz/shop/p/murakami-h-medlennoi-shljupkoi-v-kitai-100347455/?c=750000000",
    category:"murakami" ,
    likes: 2,
    id: 20,
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/