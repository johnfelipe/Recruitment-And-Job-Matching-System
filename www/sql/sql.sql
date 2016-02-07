-- CREATE DATABASE infinity
--   DEFAULT CHARACTER SET utf8
--   DEFAULT COLLATE utf8_general_ci;


--USE infinity;
-- SET NAMES 'utf8';

CREATE TABLE products (
   product_name varchar(200) PRIMARY KEY NOT NULL,
   category varchar(150) NOT NULL,
   description text,
   image1 varchar(150) NOT NULL,
   image2 varchar(150) NOT NULL,
   image3 varchar(150) NOT NULL,
   price decimal(7,2) NOT NULL,
   stock_count_id_fk int(11) NOT NULL,
   FOREIGN KEY (stock_count_id_fk) REFERENCES stockcount(stock_count_id)
)ENGINE = InnoDB;

CREATE TABLE customerDetails (
   id varchar(200) AUTO_INCREMENT PRIMARY KEY NOT NULL,
   password_ varchar(255) NOT NULL,
   title_ varchar(5) NOT NULL,
   name_ varchar(50) NOT NULL,
   surname_ varchar(50),
   phone_ int(11) NOT NULL,
   postcode varchar(25) NOT NULL,
   reg_date timestamp NOT NULL,
   email_ varchar(200) NOT NULL
)ENGINE = InnoDB;

CREATE TABLE stockcount (
   stock_count_id int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
   xs int(11),
   s int(11),
   m int(11),
   l int(11),
   xl int(11),
   UK_6 int(11),
   UK_7 int(11),
   UK_8 int(11),
   UK_9 int(11),
   UK_10 int(11),
   UK_11 int(11),
   UK_12 int(11),
   total_stock int(11) NOT NULL
)ENGINE = InnoDB;


CREATE TABLE contactusentries (
   id INT NOT NULL AUTO_INCREMENT,
   PRIMARY KEY(id),
   name_ VARCHAR(50) NOT NULL,
   surname_ VARCHAR(50) NOT NULL,
   title_ VARCHAR(5) NOT NULL,
   contactdaytime_ INT(11) NOT NULL,
   contactevening_ INT(11) NOT NULL,
   email_ VARCHAR(50) NOT NULL,
   subject_ VARCHAR(50) NOT NULL,
   message_ VARCHAR(1000) NOT NULL,
   reg_date TIMESTAMP
)ENGINE = InnoDB;



/*JUMPERS*/
INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock )
VALUES (
'1', '100', '100', '100', '100', '100', '500'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'2', '50', '50', '50', '50', '50', '250'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock )
VALUES (
'3', '50', '50', '50', '50', '50' , '250'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Christmas Jumper - Black with Bobbles', 'hoodies/sweatshirts', 'Mid-weight knit.
Festive jacquard with tinsel detail.
Machine washable.
<br></br>
88% Acrylic, 6% Polyester, 4% Other Fibres, 1% Elastane, 1% Nylon.', 'hoodies_sweatshirts_1_0.png', 'hoodies_sweatshirts_1_1.png', 'hoodies_sweatshirts_1_2.png', '24.99', '1')

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Christmas Jumper - Black with Trees', 'hoodies/sweatshirts', 'Soft-touch, knitted fabric with crew neck.
All over pattern including ribbed cuffs and hem.
Machine washable.
<br></br>
52% Cotton, 48% Acrylic.', 'hoodies_sweatshirts_2_0.png', 'hoodies_sweatshirts_2_1.png', 'hoodies_sweatshirts_2_2.png', '19.99', '2' )

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Christmas Jumper - Blue Rude', 'hoodies/sweatshirts', 'The rudest jumper out. Essential for your xmas wardrobe. Machine washable.
<br></br>
100% cotton.', 'hoodies_sweatshirts_3_0.png', 'hoodies_sweatshirts_3_1.png', 'hoodies_sweatshirts_3_2.png', '15.99', '3'
)

/* TOPS */


INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'4', '0', '10', '20', '5', '50' , '85'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'5', '10', '11', '0', '90', '12', '123'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'6', '102', '1', '23', '9', '212','347'
)


INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Long sleeved grey top', 'tops', 'Soft-touch jersey fabric crew neck.
Full length sleeves.
Side zips to hem.
Hand wash.', 'tops_1_0.png', 'tops_1_1.png', 'tops_1_2.png', '30.00', '4'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Black top with gold finish', 'tops', 'Soft-touch, crew neck jersey with bold metalic pattern on front. Regular fit.
Machine wash.
<br></br>
100% Cotton.', 'tops_2_0.png', 'tops_2_1.png', 'tops_2_2.png', '60.00', '5'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Grey top with skull', 'tops', 'Soft-touch, cotton jersey with crew neck. Machine washable. 
<br></br>
100% Cotton.', 'tops_3_0.png', 'tops_3_1.png', 'tops_3_2.png', '29.99', '6'
)

/*JACKETS */

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'7', '3', '10', '30', '51', '5','99'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'8', '10', '11', '0', '10', '12','43'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'9', '13', '11', '323', '19', '2','368'
)


INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Grey jacket with furry hood', 'jackets', 'Grey coat with aux fur trim and faux shearling hood lining. Zip through front with button fastening and front utility pockets.
<br></br>
Made from pure 100% cotton.', 'jackets_1_0.png', 'jackets_1_1.png', 'jackets_1_2.png', '60.00', '7'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Classic black coat', 'jackets', 'Heavyweight wool blend, lined with internal pocket. Twin flap pockets so your items dont get wet. Waterproof. Machine washable. 
<br></br>
51% Polyester, 44% Wool, 5% Viscose.', 'jackets_2_0.png', 'jackets_2_1.png', 'jackets_2_2.png', '53.25', '8'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Blue rain jacket', 'jackets', 'Light weight rain jacket in blue. Water resistant and durable. Pointed colar for extra style. 
<br></br>
60% Wool, 25% Polyester, 10% Viscose, 5% Rayon.', 'jackets_3_0.png', 'jackets_3_1.png', 'jackets_3_2.png', '39.99', '9'
)

/*TROUSERS */

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock )
VALUES (
'10', '5', '99', '31', '51', '5','191'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'11', '130', '10', '0', '60', '12','212'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'12', '11', '1', '323', '49', '2','386'
)


INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Grey joggies', 'trousers', 'Made from a breathable jersey fabric with drawstring waistline, slanted side pockets, single back pocket and fitted cuffs.', 'trousers_1_0.png', 'trousers_1_1.png', 'trousers_1_2.png', '20.00', '10'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Red chinos', 'trousers', 'Smooth woven fabric.
Concealed zip fly.
Side slant pockets.
Slim fit - cut closely to the body.
Machine washable.
<br></br>
100% Cotton.', 'trousers_2_0.png', 'trousers_2_1.png', 'trousers_2_2.png', '40.00', '11'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Dark blue loose fit jeans', 'trousers', 'Made from a premium cotton denim with natural fading and whiskering.
Classic five pocket styling. Concealed button fly. Skinny fit. Machine washable.
<br></br>
100% denim.', 'trousers_3_0.png', 'trousers_3_1.png', 'trousers_3_2.png', '19.99', '12'
)


/*SHOES */

INSERT INTO stockcount ( stock_count_id , UK_6 , UK_7 , UK_8 , UK_9 , UK_10, UK_11, UK_12 , total_stock )
VALUES (
'13', '10', '10', '10', '10', '10', '10', '10', '70'
)

INSERT INTO stockcount ( stock_count_id , UK_6 , UK_7 , UK_8 , UK_9 , UK_10, UK_11, UK_12 , total_stock )
VALUES (
'14', '0', '1', '2', '3', '4', '5', '6', '21'
)

INSERT INTO stockcount ( stock_count_id , UK_6 , UK_7 , UK_8 , UK_9 , UK_10, UK_11, UK_12 , total_stock )
VALUES (
'15', '11', '13', '21', '51', '5', '31', '0', '132'
)


INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Brown leather ankle-boots', 'footwear', 'Matte leather fabric upper with lace up fastening. For better durability treat with long lasting leather protector.
<br></br>
100% Real Leather.', 'footwear_1_0.png', 'footwear_1_1.png', 'footwear_1_2.png', '40.00', '13'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Navy nikes', 'footwear', '100% leather upper.
Lace up fastening with durable laces.
Signature swoosh logo to the side to make you look swag.', 'footwear_2_0.png', 'footwear_2_1.png', 'footwear_2_2.png', '55.00', '14'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Brown leather shoes', 'footwear', 'Smooth, matte finish with lace-up fastening.Contrast durable sole for longer wear time.Treat with a suitable leather protector', 'footwear_3_0.png', 'footwear_3_1.png', 'footwear_3_2.png', '59.99', '15'
)


/*UNDERWEAR */

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'16', '5', '3', '3', '1', '5','17'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock )
VALUES (
'17', '13', '1', '0', '6', '12','32'
)

INSERT INTO stockcount ( stock_count_id , xs , s , m , l , xl , total_stock)
VALUES (
'18', '11', '1', '3', '9', '2','26'
)


INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Chihuahua pants', 'underwear', 'Soft-touch stretch fabric with ellasticated waistband. Large print of dog on rear. Form fitting design. Machine washable.
<br></br>
96% Cotton, 4% Elastane.', 'underwear_1_0.png', 'underwear_1_1.png', 'underwear_1_2.png', '19.99', '16'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Red Armani Boxers', 'underwear', 'Soft-touch, stretch  fabric with elasticated waistband. Tight fit design. Machine washable. 
<br></br>
95% Cotton, 5% Elastane.', 'underwear_2_0.png', 'underwear_2_1.png', 'underwear_2_2.png', '19.99', '17'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Bjorg Y-Fronts', 'underwear', 'Soft-touch stretchy fabric with branded elasticated waistband. Made to be form fitting.
<br></br>
95% Cotton, 5% Elastane.', 'underwear_3_0.png', 'underwear_3_1.png', 'underwear_3_2.png', '19.99', '18'
)


/*ACCESSORIES */

INSERT INTO stockcount ( stock_count_id , total_stock )
VALUES (
'19', '19'
)

INSERT INTO stockcount ( stock_count_id , total_stock )
VALUES (
'20', '13'
)

INSERT INTO stockcount ( stock_count_id , total_stock)
VALUES (
'21', '0'
)


INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Blue backpack', 'accessories', 'Lightly textured made with durable waterproof fabric.
Zip around opening.
Front pouch pocket for added storage. 
Adjustable padded shoulder straps.
<br></br>
H: 42cm/17" W: 32cm/13" D: 13.5cm/5"', 'accessories_1_0.png', 'accessories_1_1.png', 'accessories_1_2.png', '25.00', '19'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Aviator-style shades', 'accessories', 'Lightweight frames with adjustable silicone nose pads for added comfort. Slim arms with curved temple tips for a secure fit.
<br></br>
Lens size: 55mm/2".
Total UV protection.', 'accessories_2_0.png', 'accessories_2_1.png', 'accessories_2_2.png', '30.00', '20'
)

INSERT INTO products ( product_name , category , description , image1 , image2 , image3 , price , stock_count_id_fk )
VALUES (
'Black leather man-bag', 'accessories', 'Textured leather look with twin grab handles for added comfort. 100% Polyester.
<br></br>H: 29cm/11" W: 46cm/18" D: 18cm/7".', 'accessories_3_0.png', 'accessories_3_1.png', 'accessories_3_2.png', '40.00', '21'
)


