import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Droplets, Sun, Shield } from 'lucide-react';
import AnimateIn from '../components/AnimateIn';
import cottonCbImage from '../assets/cotton-cb.jpg';
import ebgCbImage from '../assets/ebg-cb.jpg';
// Military tent images
import universalMilitaryImage from '../tents/military tents/universaal.jpg';
import ridgeMilitaryImage from '../tents/military tents/ridge.jpg';
import temperHospitalImage from '../tents/military tents/temper.jpg';
import gpmBeamImage from '../tents/military tents/gpm.jpg';
import generalPurposeImage from '../tents/military tents/general.jpg';
import bivouacImage from '../tents/military tents/bivvouac.jpg';
import baseCollectiveImage from '../tents/military tents/base collective.jpg';
import baseMilitaryImage from '../tents/military tents/base military.jpg';
// Relief tent images
import reliefDoubleThreeImage from '../tents/relief tents/1.jpg';
import reliefDoubleDoubleImage from '../tents/relief tents/2.jpg';
import reliefDoubleSingleImage from '../tents/relief tents/3.jpg';
import reliefSingleDoubleImage from '../tents/relief tents/4.jpg';
import reliefSingleSingleImage from '../tents/relief tents/5.jpg';
// Marquee tent images
import marqueeTentImage from '../tents/marqee tents/1.jpg';
// Deluxe tent images - used via duluxTentImages in productDatabase
import dulux101Image from '../tents/dulux tents/101.png';
import dulux102Image from '../tents/dulux tents/102.png';
import dulux103Image from '../tents/dulux tents/103.png';
import dulux104Image from '../tents/dulux tents/104.png';
import dulux105Image from '../tents/dulux tents/105.png';
import dulux106Image from '../tents/dulux tents/106.png';
import dulux107Image from '../tents/dulux tents/107.png';
import dulux108Image from '../tents/dulux tents/108.png';
import dulux109Image from '../tents/dulux tents/109.png';
import dulux110Image from '../tents/dulux tents/110.png';
import dulux111Image from '../tents/dulux tents/111.png';
import dulux112Image from '../tents/dulux tents/112.png';
import dulux113Image from '../tents/dulux tents/113.png';
import dulux114Image from '../tents/dulux tents/114.png';
import dulux115Image from '../tents/dulux tents/115.png';
import dulux116Image from '../tents/dulux tents/116.png';
import dulux117Image from '../tents/dulux tents/117.png';
import dulux118Image from '../tents/dulux tents/118.png';

const duluxTentImages: Record<string, string> = {
  'tents-dulex-ht101': dulux101Image,
  'tents-dulex-ht102': dulux102Image,
  'tents-dulex-ht103': dulux103Image,
  'tents-dulex-ht104': dulux104Image,
  'tents-dulex-ht105': dulux105Image,
  'tents-dulex-ht106': dulux106Image,
  'tents-dulex-ht107': dulux107Image,
  'tents-dulex-ht108': dulux108Image,
  'tents-dulex-ht109': dulux109Image,
  'tents-dulex-ht110': dulux110Image,
  'tents-dulex-ht111': dulux111Image,
  'tents-dulex-ht112': dulux112Image,
  'tents-dulex-ht113': dulux113Image,
  'tents-dulex-ht114': dulux114Image,
  'tents-dulex-ht115': dulux115Image,
  'tents-dulex-ht116': dulux116Image,
  'tents-dulex-ht117': dulux117Image,
  'tents-dulex-ht118': dulux118Image,
};
// Shelter tent images - These are used in the productDatabase object below
/* eslint-disable @typescript-eslint/no-unused-vars */
import shelter101Image from '../tents/shelter tents/1.png';
import shelter102Image from '../tents/shelter tents/2.png';
import shelter103Image from '../tents/shelter tents/3.png';
import shelter104Image from '../tents/shelter tents/4.png';
import shelter105Image from '../tents/shelter tents/5.png';
import shelterHospitalImage from '../tents/shelter tents/6.png';
/* eslint-enable @typescript-eslint/no-unused-vars */
// Kuwaiti Deluxe tent images - These are used in the productDatabase object below
/* eslint-disable @typescript-eslint/no-unused-vars */
import kuwaiti101Image from '../tents/Kuwaiti dulux tents/Kuwaiti Dulux Tent HT-101.jpg';
import kuwaiti102Image from '../tents/Kuwaiti dulux tents/Kuwaiti Dulux Tent HT-102.jpg';
import kuwaiti103Image from '../tents/Kuwaiti dulux tents/Kuwaiti Dulux Tent HT-103.jpg';
/* eslint-enable @typescript-eslint/no-unused-vars */
// Multipurpose tent images - These are used in the productDatabase object below
/* eslint-disable @typescript-eslint/no-unused-vars */
import multipurposeBathImage from '../tents/multipurpose tents/1.png';
import multipurposeWall102Image from '../tents/multipurpose tents/2.png';
import multipurposeWall103Image from '../tents/multipurpose tents/3.png';
import multipurposeCampingImage from '../tents/multipurpose tents/4.png';
/* eslint-enable @typescript-eslint/no-unused-vars */
// Filter bag images
import filterBag5Image from '../filter bag/1.jfif';
import filterBag10Image from '../filter bag/2.jfif';
import filterBag25Image from '../filter bag/3.jfif';
// Tarpaulin images (tarpulin folder - 4 images for cards)
import tarpulin1Image from '../tarpulin/1.png';
import tarpulin2Image from '../tarpulin/2.png';
import tarpulin3Image from '../tarpulin/3.png';
import tarpulin4Image from '../tarpulin/4.png';
// Filter cloth images (FC folder - cards 1,2,3,7; 4,5,6 use same images)
import fc1Image from '../FC/1.png';
import fc2Image from '../FC/2.png';
import fc3Image from '../FC/3.png';
import fc7Image from '../FC/7.png';
// Canvas images (CC folder)
import cc1Image from '../CC/1.png';
import cc2Image from '../CC/2.png';
import cc3Image from '../CC/3.png';
import cc5Image from '../CC/5.png';

// Product data - This could be moved to a separate file or fetched from an API
const productDatabase: Record<string, { name: string; description: string; imageUrl: string; details: string; specifications: string; accessories?: string; packing?: string; dimensions?: string; shipping?: string }> = {
  'conveyor-cotton': {
    name: 'Cotton Conveyor Belt',
    description: 'cotton conveyor belt specially used in cooling conveyor of biscuit dough from oven. it is made from 100% cotton, so it can be use as food conveyor belt we provide premium quality range of endless conveyor web to our esteemed clients',
    imageUrl: cottonCbImage,
    details: 'cotton conveyor belt specially used in cooling conveyor of biscuit dough from oven. it is made from 100% cotton, so it can be use as food conveyor belt we provide premium quality range of endless conveyor web to our esteemed clients',
    specifications: `A WIDTH: 10", 40" TO 75" (ALL SIZE AVAILABLE)
B ENDS: 200" - 210" PER INCH
C PICKS: 130" - 140" PER INCH
D PLY & COUNT OF ENDS: 10/7
E PLY & COUNT OF PICKS: 10/8 10/7
F POLYESTER PICKS & ENDS: 10%
1 PURE COTTON YARN
MATERIAL: 100% COTTON
YARN TYPE: CARDED, COMBED
USE: BISCUIT FACTORY
SUPPLY TYPE: MAKE TO ORDER
TEXTURE: PLAIN
COLOUR: WHITE`,
    accessories: `COMPLETE CONVEYOR BELT SYSTEM
INSTALLATION GUIDELINES
QUALITY CERTIFICATE`,
    packing: `PACKED IN PROTECTIVE MATERIAL
CUSTOM PACKAGING AVAILABLE
SHIPPING BOXES INCLUDED`,
    dimensions: `WIDTH: 10" TO 75" (CUSTOM SIZES AVAILABLE)
LENGTH: AS PER REQUIREMENT
THICKNESS: STANDARD INDUSTRY SPECIFICATIONS`,
    shipping: `STANDARD SHIPPING: 7-14 BUSINESS DAYS
EXPRESS SHIPPING: 3-5 BUSINESS DAYS
INTERNATIONAL SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'conveyor-english-cotton': {
    name: 'English Cotton Conveyor Belt',
    description: 'cotton conveyor belt specially used in cooling conveyor of biscuit dough from oven. it is made from 100% cotton, so it can be use as food conveyor belt we provide premium quality range of endless conveyor web to our esteemed clients',
    imageUrl: ebgCbImage,
    details: 'cotton conveyor belt specially used in cooling conveyor of biscuit dough from oven. it is made from 100% cotton, so it can be use as food conveyor belt we provide premium quality range of endless conveyor web to our esteemed clients',
    specifications: `A WIDTH: 10", 40" TO 75" (ALL SIZE AVAILABLE)
B ENDS: 200" - 210" PER INCH
C PICKS: 130" - 140" PER INCH
D PLY & COUNT OF ENDS: 10/7
E PLY & COUNT OF PICKS: 10/8 10/7
F POLYESTER PICKS & ENDS: 10%
1 PURE COTTON YARN
MATERIAL: 100% COTTON
YARN TYPE: CARDED, COMBED
USE: BISCUIT FACTORY
SUPPLY TYPE: MAKE TO ORDER
TEXTURE: PLAIN
COLOUR: WHITE`,
    accessories: `COMPLETE CONVEYOR BELT SYSTEM
INSTALLATION GUIDELINES
QUALITY CERTIFICATE`,
    packing: `PACKED IN PROTECTIVE MATERIAL
CUSTOM PACKAGING AVAILABLE
SHIPPING BOXES INCLUDED`,
    dimensions: `WIDTH: 10" TO 75" (CUSTOM SIZES AVAILABLE)
LENGTH: AS PER REQUIREMENT
THICKNESS: STANDARD INDUSTRY SPECIFICATIONS`,
    shipping: `STANDARD SHIPPING: 7-14 BUSINESS DAYS
EXPRESS SHIPPING: 3-5 BUSINESS DAYS
INTERNATIONAL SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  // Relief/Disaster Tents
  'tents-relief-double-three': {
    name: 'Winterized Double Fly Three-fold Tent',
    description: 'our winterized tent especially designed and constructed to withstand the harsh conditions of winter camping. it is made of heavy-duty, waterproof materials and features additional insulation to keep the interior warm in cold temperatures. these tents are ideal for camping in cold weather conditions and provide a safe and comfortable shelter for outdoor enthusiasts during winter expeditions.',
    imageUrl: reliefDoubleThreeImage,
    details: 'our winterized tent especially designed and constructed to withstand the harsh conditions of winter camping. it is made of heavy-duty, waterproof materials and features additional insulation to keep the interior warm in cold temperatures. these tents are ideal for camping in cold weather conditions and provide a safe and comfortable shelter for outdoor enthusiasts during winter expeditions. two doors (front and rear) plus two windows.',
    specifications: `FABRIC:
OPTION A: 100% COTTON – WATER, ROT PROOF + UV RESISTANT NATURAL WHITE
OPTION B: POLYESTER COTTON – WATER & ROT PROOF + UV RESISTANT NATURAL WHITE
GROUND SHEET: SEWN IN TUB P.E LAMINATED FABRIC
MUD FLAP: P.E LAMINATED FABRIC`,
    accessories: `COMPLETE WITH HAMMER, IRON PEGS, PINS, ROPES, ASSEMBLY INSTRUCTION, ETC`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN A BAG`,
    dimensions: `LENGTH X WIDTH: 4.00 X 4.00 METER OR
USABLE AREA: 16.00 M2 OR 12 M2
CENTER | SIDE WALL HEIGHT: 2.15 METER | 0.90 METER`,
    shipping: `DIMENSIONS: 215X28X28CM
WEIGHT: 42 KG
VOLUME PACKED: 0.16 CBM
LOADING: 20' 200 UNITS | 40' 400 UNITS | 40' 420 UNITS`,
  },
  'tents-relief-double-double': {
    name: 'Double Fly, Double Fold Tent',
    description: 'doublefly heavy duty family ridge tent. suitable for longer use even in extreme weather conditions. made from cotton canvas waterproof 400 or 450 gms per square meter natural white or olive green. complete with metal poles, iron pegs and a carrying bag. optional inner tent provided with extra inner lining for extreme weather conditions, stove pipe opening in roof. grounsheet to fit tent.',
    imageUrl: reliefDoubleDoubleImage,
    details: 'doublefly heavy duty family ridge tent. suitable for longer use even in extreme weather conditions. made from cotton canvas waterproof 400 or 450 gms per square meter natural white or olive green. complete with metal poles, iron pegs and a carrying bag. optional inner tent provided with extra inner lining for extreme weather conditions, stove pipe opening in roof. grounsheet to fit tent.',
    specifications: `LENGTH: 4.00 MTRS
WIDTH: 4.00 MTRS
CENTRAL HEIGHT OF INNER: 2.15 MTRS
WALL HEIGHT: 0.90 MTRS
DOOR(S): TWO
WINDOW(S): TWO
POLES: TWO STANDING AND ONE RIDGE MADE OF STEEL
PEGS: TWELVE MADE OF IRON
PINS: TWELVE MADE OF IRON
HAMMER: ONE MADE OF IRON
OUTER FLY: MADE OF SINGLE LAYER OF NATURAL COLOUR POLY/COTTON WATER AND ROTPROOF CANVAS QUALITY 450 GRAMS.M2
INNER FLY: MADE OF TWO LAYERS OF CLOTH I.E. OUTERSIDE NATURAL COLOR POLY/COTTON WATER AND ROT PROOF COTTON CANVAS QUALITY 450 GRAMS.M2 AND INNERSIDE DYED LINING`,
    accessories: `METAL POLES
IRON PEGS
CARRYING BAG
OPTIONAL INNER TENT WITH EXTRA INNER LINING
STOVE PIPE OPENING IN ROOF
GROUNDSHEET TO FIT TENT`,
    packing: `EACH COMPLETE TENT PACKED IN HESSIAN CLOTH`,
    dimensions: `LENGTH: 4.00 MTRS
WIDTH: 4.00 MTRS
CENTRAL HEIGHT OF INNER: 2.15 MTRS
WALL HEIGHT: 0.90 MTRS`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-relief-double-single': {
    name: 'Double Fly, Single Fold Tent',
    description: 'doublefly heavy duty family ridge tent. suitable for longer use even in extreme weather conditions. made from cotton canvas waterproof 400 or 450 gms per square meter natural white or olive green. complete with metal poles, iron pegs and a carrying bag. optional inner tent provided with extra inner lining for extreme weather conditions, stove pipe opening in roof. grounsheet to fit tent.',
    imageUrl: reliefDoubleSingleImage,
    details: 'doublefly heavy duty family ridge tent. suitable for longer use even in extreme weather conditions. made from cotton canvas waterproof 400 or 450 gms per square meter natural white or olive green. complete with metal poles, iron pegs and a carrying bag. optional inner tent provided with extra inner lining for extreme weather conditions, stove pipe opening in roof. grounsheet to fit tent.',
    specifications: `LENGTH: 4.00 MTRS
WIDTH: 4.00 MTRS
CENTRAL HEIGHT OF INNER: 2.15 MTRS
WALL HEIGHT: 0.90 MTRS
DOOR(S): TWO
WINDOW(S): TWO
POLES: TWO STANDING AND ONE RIDGE MADE OF STEEL
PEGS: TWELVE MADE OF IRON
PINS: TWELVE MADE OF IRON
HAMMER: ONE MADE OF IRON
OUTER FLY: MADE OF SINGLE LAYER OF NATURAL COLOUR POLY/COTTON WATER AND ROTPROOF CANVAS QUALITY 450 GRAMS.M2
INNER FLY: MADE OF SINGLE LAYERS OF CLOTH I.E. OUTERSIDE NATURAL COLOR POLY/COTTON WATER AND ROT PROOF COTTON CANVAS QUALITY 450 GRAMS.M2 AND INNERSIDE DYED LINING`,
    accessories: `METAL POLES
IRON PEGS
CARRYING BAG
OPTIONAL INNER TENT WITH EXTRA INNER LINING
STOVE PIPE OPENING IN ROOF
GROUNDSHEET TO FIT TENT`,
    packing: `EACH COMPLETE TENT PACKED IN HESSIAN CLOTH`,
    dimensions: `LENGTH: 4.00 MTRS
WIDTH: 4.00 MTRS
CENTRAL HEIGHT OF INNER: 2.15 MTRS
WALL HEIGHT: 0.90 MTRS`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-relief-single-double': {
    name: 'Single Fly, Double Fold Tent',
    description: 'single fly heavy duty family ridge tent. suitable for longer use even in extreme weather conditions. made from cotton canvas waterproof 400 or 450 gms per square meter natural white or olive green. complete with metal poles, iron pegs and a carrying bag. optional inner tent provided with extra inner lining for extreme weather conditions, stove pipe opening in roof. grounsheet to fit tent.',
    imageUrl: reliefSingleDoubleImage,
    details: 'single fly heavy duty family ridge tent. suitable for longer use even in extreme weather conditions. made from cotton canvas waterproof 400 or 450 gms per square meter natural white or olive green. complete with metal poles, iron pegs and a carrying bag. optional inner tent provided with extra inner lining for extreme weather conditions, stove pipe opening in roof. grounsheet to fit tent.',
    specifications: `LENGTH: 4.00 MTRS
WIDTH: 4.00 MTRS
CENTRAL HEIGHT OF INNER: 2.15 MTRS
WALL HEIGHT: 0.90 MTRS
DOOR(S): TWO
WINDOW(S): TWO
POLES: TWO STANDING AND ONE RIDGE MADE OF STEEL
PEGS: TWELVE MADE OF IRON
PINS: TWELVE MADE OF IRON
HAMMER: ONE MADE OF IRON`,
    accessories: `METAL POLES
IRON PEGS
CARRYING BAG
OPTIONAL INNER TENT WITH EXTRA INNER LINING
STOVE PIPE OPENING IN ROOF
GROUNDSHEET TO FIT TENT`,
    packing: `EACH COMPLETE TENT PACKED IN HESSIAN CLOTH`,
    dimensions: `LENGTH: 4.00 MTRS
WIDTH: 4.00 MTRS
CENTRAL HEIGHT OF INNER: 2.15 MTRS
WALL HEIGHT: 0.90 MTRS`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-relief-single-single': {
    name: 'Single Fly, Single Fold Tent',
    description: 'single fly heavy duty family ridge tent. suitable for longer use even in extreme weather conditions. made from cotton canvas waterproof 400 or 450 gms per square meter natural white or olive green. complete with metal poles, iron pegs and a carrying bag. optional inner tent provided with extra inner lining for extreme weather conditions, stove pipe opening in roof. grounsheet to fit tent.',
    imageUrl: reliefSingleSingleImage,
    details: 'single fly heavy duty family ridge tent. suitable for longer use even in extreme weather conditions. made from cotton canvas waterproof 400 or 450 gms per square meter natural white or olive green. complete with metal poles, iron pegs and a carrying bag. optional inner tent provided with extra inner lining for extreme weather conditions, stove pipe opening in roof. grounsheet to fit tent.',
    specifications: `LENGTH: 4.00 MTRS
WIDTH: 4.00 MTRS
CENTRAL HEIGHT OF INNER: 2.15 MTRS
WALL HEIGHT: 0.90 MTRS
DOOR(S): TWO
WINDOW(S): TWO
POLES: TWO STANDING AND ONE RIDGE MADE OF STEEL
PEGS: TWELVE MADE OF IRON
PINS: TWELVE MADE OF IRON
HAMMER: ONE MADE OF IRON`,
    accessories: `METAL POLES
IRON PEGS
CARRYING BAG
OPTIONAL INNER TENT WITH EXTRA INNER LINING
STOVE PIPE OPENING IN ROOF
GROUNDSHEET TO FIT TENT`,
    packing: `EACH COMPLETE TENT PACKED IN HESSIAN CLOTH`,
    dimensions: `LENGTH: 4.00 MTRS
WIDTH: 4.00 MTRS
CENTRAL HEIGHT OF INNER: 2.15 MTRS
WALL HEIGHT: 0.90 MTRS`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  // Military Tents
  'tents-military-universal': {
    name: 'Universal Military Tent',
    description: 'this is a popular military tent having versatile accommodation unit made from cotton canvas waterproof and rot proof natural white or in a color of your choice. the tent comes packed in a cotton carrying bag. complete with metal poles, iron pegs, pins hammer and a carrying bag.',
    imageUrl: universalMilitaryImage,
    details: 'this is a popular military tent having versatile accommodation unit made from cotton canvas waterproof and rot proof natural white or in a color of your choice. the tent comes packed in a cotton carrying bag. complete with metal poles, iron pegs, pins hammer and a carrying bag.',
    specifications: `FABRIC: 600 GSM (+/- 5%) 100% COTTON CANVAS, WATER & ROT RESISTANT FABRIC IN OLIVE GREEN, KHAKI OR ANY COLOR
OPTION A: OPTIONAL INNER FOLD MADE OF 100% COTTON 180 GSM DYED FABRIC
OPTION B: OPTIONAL FIRE RETARDANT FINISH IN TENT FABRIC
GROUND SHEET & MUD FLAP: 180 GSM (+/-5%) PE
OPTIONAL GROUND SHEET: 400 GSM (+/-5%) PVC COATED FABRIC ON BOTH SIDES`,
    accessories: `METAL FRAME OF POWDER COATED STEEL PIPES
HAMMER
IRON PEGS
GROUND PINS
GUY ROPES`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN WOODEN BOXES`,
    dimensions: `OPTION 1: 5.5 X 6 METER (33 M2 USABLE AREA, 3.65M CENTER HEIGHT, 1.63M WALL HEIGHT)
OPTION 2: 8.2 X 6 METER (49.2 M2 USABLE AREA, 3.65M CENTER HEIGHT, 1.63M WALL HEIGHT)
OPTION 3: 11 X 6 METER (66 M2 USABLE AREA, 3.65M CENTER HEIGHT, 1.63M WALL HEIGHT)
OPTION 4: 13.7 X 6 METER (82.2 M2 USABLE AREA, 3.65M CENTER HEIGHT, 1.63M WALL HEIGHT)`,
    shipping: `OPTION 1: 240 KG | 0.80 CBM | 20' 35 UNITS | 40' 72 UNITS | 40' HCL 85 UNITS
OPTION 2: 300 KG | 1.10 CBM | 20' 25 UNITS | 40' 52 UNITS | 40' HCL 62 UNITS
OPTION 3: 430 KG | 1.40 CBM | 20' 20 UNITS | 40' 41 UNITS | 40' HCL 48 UNITS
OPTION 4: 560 KG | 1.65 CBM | 20' 17 UNITS | 40' 35 UNITS | 40' HCL 41 UNITS
REMARKS: 4 DOORS & 28 WINDOWS WITH FLAP`,
  },
  'tents-military-ridge': {
    name: 'Ridge Military Tent',
    description: 'both inner tent and outer fly made of 100% cotton duck olive green, water, rot proof 425 g/m2. option a: ground sheet made of woven high-density polyethylene black fibers fabric laminated on both sides with low density polyethylene coating 180 g/m2 (+/-5%). option b: optional fire retardant finish in tent fabric.',
    imageUrl: ridgeMilitaryImage,
    details: 'both inner tent and outer fly made of 100% cotton duck olive green, water, rot proof 425 g/m2. option a: ground sheet made of woven high-density polyethylene black fibers fabric laminated on both sides with low density polyethylene coating 180 g/m2 (+/-5%). option b: optional fire retardant finish in tent fabric.',
    specifications: `INNER TENT & OUTER FLY: 425 GSM (+/- 5%) 100% COTTON DUCK CANVAS, WATER & ROT RESISTANT FABRIC IN OLIVE GREEN, KHAKI OR ANY COLOR
OPTION-B: OPTIONAL FIRE RETARDANT FINISH IN TENT FABRIC
GROUND SHEET & MUD FLAP: 180 GSM (+/-5%) PE`,
    accessories: `COMPLETE WITH 3 UPRIGHT + 2 RIDGE POLES, GROUND PINS AND GUY ROPES`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN BUNDLES`,
    dimensions: `LENGTH X WIDTH OUTER TENT: 4.25 X 4.25 METER
USABLE AREA: 18.10 M2`,
    shipping: `WEIGHT | VOLUME PACKED: 73.5 KG 0.22 CBM
LOADING: 20' 127 UNITS | 40' 263 UNITS | 40' HCL 309 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (HEIGHT 180 CM) & 4 WINDOWS WITH FLAP ON EACH SIDE`,
  },
  'tents-military-temper-hospital': {
    name: 'Temper Hospital Military Tent',
    description: 'heavy duty hospital tent is suitable for longer use even in extreme weather conditions for use as temporary military hospital. made from finest cotton or poly cotton canvas water, rot proof and uv resistant. the frame tent is complete with metal poles, iron pegs and a carrying bag. with pvc ground sheet to fit tent and packing in strong wooden boxes.',
    imageUrl: temperHospitalImage,
    details: 'heavy duty hospital tent is suitable for longer use even in extreme weather conditions for use as temporary military hospital. made from finest cotton or poly cotton canvas water, rot proof and uv resistant. the frame tent is complete with metal poles, iron pegs and a carrying bag. with pvc ground sheet to fit tent and packing in strong wooden boxes.',
    specifications: `TENT:
OPTION-A: 400 GSM (+/- 5%) POLYESTER COTTON CANVAS, WATER & ROT RESISTANT FABRIC IN OLIVE GREEN, KHAKI OR ANY COLOR
OPTION-B: OPTIONAL FIRE RETARDANT FINISH IN TENT FABRIC
GROUND SHEET & MUD FLAP: 400 GSM (+/-5%) PVC COATED FABRIC ON BOTH SIDES`,
    accessories: `COMPLETE WITH SPRING STEEL ROD FRAME, GROUND PINS & GUY ROPES`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN A BAG`,
    dimensions: `LENGTH X WIDTH OUTER TENT: 2.4 X 2.4 METER
USABLE AREA: 5.76 M2
CENTER HEIGHT | WALL HEIGHT: 1.85 METER 1.7 METER`,
    shipping: `WEIGHT | VOLUME PACKED: 24 KG 0.10 CBM
LOADING: 20' 280 UNITS | 40' 580 UNITS | 40' HCL 680 UNITS
MARKING: ON REQUEST`,
  },
  'tents-military-gpm-beam': {
    name: 'GPM Beam Military Tent',
    description: 'made of 100% cotton canvas olive green, water, rot proof 600 g/m2. option a: optional inner fold made of 100% cotton fabric dyed 180 g/m2. option b: optional fire retardant finish in tent fabric.',
    imageUrl: gpmBeamImage,
    details: 'made of 100% cotton canvas olive green, water, rot proof 600 g/m2. option a: optional inner fold made of 100% cotton fabric dyed 180 g/m2. option b: optional fire retardant finish in tent fabric.',
    specifications: `TENT: 600 GSM (+/- 5%) 100% COTTON CANVAS, WATER & ROT RESISTANT FABRIC IN OLIVE GREEN, KHAKI OR ANY COLOR
OPTION-A: OPTIONAL INNER FOLD MADE OF 100% COTTON 180 GSM DYED FABRIC
OPTION-B: OPTIONAL FIRE RETARDANT FINISH IN TENT FABRIC
GROUND SHEET & MUD FLAP: 180 GSM (+/-5%) PE
OPTIONAL: GROUND SHEET CAN BE REPLACED WITH 400 GSM (+/-5%) PVC COATED FABRIC ON BOTH SIDES`,
    accessories: `COMPLETE WITH METAL POLES OF POWDER COATED STEEL PIPES, IRON PEGS, GROUND PINS AND GUY ROPES`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN BUNDLES`,
    dimensions: `OPTION 1:
LENGTH X WIDTH OUTER TENT: 10 X 5 METER
USABLE AREA: 24 M2
CENTER HEIGHT | WALL HEIGHT: 3.1 METER | 1.7 METER

OPTION 2:
LENGTH X WIDTH OUTER TENT: 12 X 6 METER
USABLE AREA: 72 M2
CENTER HEIGHT | WALL HEIGHT: 3.1 METER | 1.7 METER

OPTION 3:
LENGTH X WIDTH OUTER TENT: 16 X 16 METER
USABLE AREA: 96 M2
CENTER HEIGHT | WALL HEIGHT: 3.1 METER | 1.7 METER`,
    shipping: `OPTION 1:
WEIGHT | VOLUME PACKED: 190 KG | 0.75 CBM
LOADING: 20' 37 UNITS | 40' 77 UNITS | 40' HCL 90 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (HEIGHT 180 CM) & 4 WINDOWS WITH FLAP ON EACH SIDE

OPTION 2:
WEIGHT | VOLUME PACKED: 230 KG | 0.82 CBM
LOADING: 20' 34 UNITS | 40' 70 UNITS | 40' HCL 83 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (HEIGHT 180 CM) & 4 WINDOWS WITH FLAP ON EACH SIDE

OPTION 3:
WEIGHT | VOLUME PACKED: 230 KG | 0.82 CBM
LOADING: 20' 28 UNITS | 40' 58 UNITS | 40' HCL 68 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (HEIGHT 180 CM) & 4 WINDOWS WITH FLAP ON EACH SIDE`,
  },
  'tents-military-general-purpose': {
    name: 'General Purpose Military Tent',
    description: 'made of 100% cotton canvas olive green, water, rot proof 450 g/m2. option a: optional outer fly made of same tent canvas. option b: optional fire retardant finish in tent fabric. complete with metal poles, iron pegs and a carrying bag. optional ground sheet to fit tent.',
    imageUrl: generalPurposeImage,
    details: 'made of 100% cotton canvas olive green, water, rot proof 450 g/m2. option a: optional outer fly made of same tent canvas. option b: optional fire retardant finish in tent fabric. complete with metal poles, iron pegs and a carrying bag. optional ground sheet to fit tent.',
    specifications: `FABRIC
TENT: 450 GSM (+/- 5%) 100% COTTON CANVAS, WATER & ROT RESISTANT FABRIC IN OLIVE GREEN, KHAKI OR ANY COLOR
OPTION A: OUTER FLY MADE OF 450 GSM (+/- 5%) 100% COTTON CANVAS, WATER & ROT RESISTANT FABRIC
OPTION-B: OPTIONAL FIRE RETARDANT FINISH IN TENT FABRIC
GROUND SHEET & MUD FLAP: 180 GSM (+/-5%) PE
OPTIONAL: GROUND SHEET CAN BE REPLACED WITH 400 GSM (+/-5%) PVC COATED FABRIC ON BOTH SIDES`,
    accessories: `COMPLETE WITH METAL FRAME OF POWDER COATED STEEL PIPES, HAMMER, IRON PEGS, GROUND PINS AND GUY ROPES`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN HEAVY DUTY CANVAS / PVC BAGS`,
    dimensions: `OPTION A:
LENGTH X WIDTH OUTER TENT: 4 X 4 METER
USABLE AREA: 16 M2
CENTER HEIGHT | WALL HEIGHT: 2.7 METER | 1.8 METER

OPTION B:
LENGTH X WIDTH OUTER TENT: 5 X 5 METER
USABLE AREA: 25 M2
CENTER HEIGHT | WALL HEIGHT: 2.7 METER | 1.8 METER`,
    shipping: `OPTION A:
WEIGHT | VOLUME PACKED: 150 KG | 0.485 CBM
LOADING: 20' 57 UNITS | 40' 119 UNITS | 40' HCL 140 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (HEIGHT: 1.7 METER) & 3 WINDOWS WITH FLAP

OPTION B:
WEIGHT | VOLUME PACKED: 175 KG | 0.58 CBM
LOADING: 20' 48 UNITS | 40' 100 UNITS | 40' HCL 117 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (HEIGHT: 1.7 METER) & 3 WINDOWS WITH FLAP`,
  },
  'tents-military-bivouac-half': {
    name: 'Bivouac Half Military Tent',
    description: 'bivouac half tents are used in military training program and army sites made with strong and reliable material to face all climate. made of 100% cotton canvas olive green, water, rot proof 320 g/m2. option a: optional fire retardant finish in tent fabric. complete with metal poles, iron pegs and a carrying bag. optional ground sheet to fit tent.',
    imageUrl: bivouacImage,
    details: 'bivouac half tents are used in military training program and army sites made with strong and reliable material to face all climate. made of 100% cotton canvas olive green, water, rot proof 320 g/m2. option a: optional fire retardant finish in tent fabric. complete with metal poles, iron pegs and a carrying bag. optional ground sheet to fit tent.',
    specifications: `FABRIC
320 GSM (+/- 5%) 100% COTTON, WATER & ROT RESISTANT FABRIC IN OLIVE GREEN, KHAKI OR ANY COLOR
GROUND SHEET & MUD FLAP: 180 GSM (+/-5%) PE`,
    accessories: `COMPLETE WITH METAL POLES OF POWDER COATED STEEL PIPES, IRON PEGS, GROUND PINS AND GUY ROPES`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN A CARTRON`,
    dimensions: `LENGTH X WIDTH OUTER TENT: 2.15 X 1.8 METER
USABLE AREA: 3.87 M2
CENTER HEIGHT: 1 METER`,
    shipping: `WEIGHT | VOLUME PACKED: 7 KG | 0.02 CBM
LOADING: 20' 1,400 UNITS | 40' 2,900 UNITS | 40' HCL 3,400 UNITS
MARKING: ON REQUEST`,
  },
  'tents-military-base-collective': {
    name: 'Base Collective Military Tent',
    description: 'military frame tent, supplied to a large number of security forces. this mobile shelter tent with its delta type walls provides unobstructed floor space. made from finest cotton or poly cotton canvas water, rot proof and uv resistant. complete with metal poles, iron pegs and a carrying bag. optional ground sheet to fit tent.',
    imageUrl: baseCollectiveImage,
    details: 'military frame tent, supplied to a large number of security forces. this mobile shelter tent with its delta type walls provides unobstructed floor space. made from finest cotton or poly cotton canvas water, rot proof and uv resistant. complete with metal poles, iron pegs and a carrying bag. optional ground sheet to fit tent.',
    specifications: `FABRIC
TENT: OPTION A: 600 GSM (+/- 5%) 100% COTTON CANVAS, WATER & ROT RESISTANT FABRIC IN OLIVE GREEN, KHAKI OR ANY COLOR
OPTION B: OPTIONAL FIRE RETARDANT FINISH IN TENT FABRIC
GROUND SHEET & MUD FLAP: 180 GSM (+/-5%) PE
OPTIONAL: GROUND SHEET CAN BE REPLACED WITH 400 GSM (+/-5%) PVC COATED FABRIC ON BOTH SIDES`,
    accessories: `COMPLETE WITH METAL FRAME OF POWDER COATED STEEL PIPES, HAMMER, IRON PEGS, GROUND PINS AND GUY ROPES`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN HEAVY DUTY PVC BAGS`,
    dimensions: `OPTION A:
LENGTH X WIDTH OUTER TENT: 6 X 4 METER
USABLE AREA: 24 M2
CENTER HEIGHT | WALL HEIGHT: 2.5 METER | 1.8 METER

OPTION B:
LENGTH X WIDTH OUTER TENT: 8 X 5 METER
USABLE AREA: 40 M2
CENTER HEIGHT | WALL HEIGHT: 2.5 METER | 1.8 METER`,
    shipping: `OPTION A:
WEIGHT | VOLUME PACKED: 68 KG | 0.70 CBM
LOADING: 20' 40 UNITS | 40' 82 UNITS | 40' HCL 97 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (HEIGHT: 1.8 METER) & 3 WINDOWS ON EACH SIDE WITH FLAP

OPTION B:
WEIGHT | VOLUME PACKED: 234 KG | 1.00 CBM
LOADING: 20' 28 UNITS | 40' 58 UNITS | 40' HCL 68 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (HEIGHT: 1.8 METERS) & 3 WINDOWS ON EACH SIDE WITH FLAP`,
  },
  'tents-military-base': {
    name: 'Base Military Tent',
    description: 'heavy duty dispensary tent is suitable for longer use even in extreme weather conditions for use as temporary army dispensary. the frame tent is complete with metal poles, iron pegs and a carrying bag. with pvc groundsheet to fit tent and packing in strong wooden boxes.',
    imageUrl: baseMilitaryImage,
    details: 'heavy duty dispensary tent is suitable for longer use even in extreme weather conditions for use as temporary army dispensary. the frame tent is complete with metal poles, iron pegs and a carrying bag. with pvc groundsheet to fit tent and packing in strong wooden boxes.',
    specifications: `FABRIC
TENT: OPTION A: 600 GSM (+/- 5%) 100% COTTON CANVAS, WATER & ROT RESISTANT FABRIC
OPTION B: 540 GSM (+/-5%) 50/50 P/C CANVAS, WATER & ROT RESISTANT FABRIC IN OLIVE GREEN, KHAKI OR ANY COLOR
INNER TENT: 50/50 P/C – 130 GSM (+/-5%) SHEETING, WATER RESISTANT FABRIC
GROUND SHEET & MUD FLAP: 400 GSM (+/-5%) PVC COATED FABRIC ON BOTH SIDES`,
    accessories: `COMPLETE WITH METAL FRAME OF POWDER COATED STEEL PIPES, HAMMER, IRON PEGS, GROUND PINS AND GUY ROPES`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN HEAVY DUTY CANVAS / PVC BAGS`,
    dimensions: `OPTION A:
LENGTH X WIDTH OUTER TENT: 7 X 6 METER
USABLE AREA: 42 M2
CENTER HEIGHT | WALL HEIGHT: 3.3 METER | 2 METER

OPTION B:
LENGTH X WIDTH OUTER TENT: 8 X 6.5 METER
USABLE AREA: 52 M2
CENTER HEIGHT | WALL HEIGHT: 3 METER | 2 METER`,
    shipping: `OPTION A:
WEIGHT | VOLUME PACKED: 240 KG | 0.80 CBM
LOADING: 20' 35 UNITS | 40' 72 UNITS | 40' HCL 85 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (FRONT & REAR) & 4 WINDOWS ON EACH SIDE WITH FLAP

OPTION B:
WEIGHT | VOLUME PACKED: 300 KG | 1.10 CBM
LOADING: 20' 25 UNITS | 40' 52 UNITS | 40' HCL 62 UNITS
MARKING: ON REQUEST
REMARKS: 2 DOORS (FRONT & REAR) & 4 WINDOWS ON EACH SIDE WITH FLAP`,
  },
  // Marquee Tents
  'tents-marquee': {
    name: 'Marquee Tents',
    description: 'this is economical both from financial and usage point of view. this can be used for various purposes. its size can be reduced or enlarged as and when desired. the handling and transportation of this tent is easy for all. it is available both in single or double roof version made from single fold dyed waterproof canvas',
    imageUrl: marqueeTentImage,
    details: 'this is economical both from financial and usage point of view. this can be used for various purposes. its size can be reduced or enlarged as and when desired. the handling and transportation of this tent is easy for all. it is available both in single or double roof version made from single fold dyed waterproof canvas',
    specifications: `FABRIC: SINGLE FOLD DYED WATERPROOF CANVAS
ROOF VERSION: AVAILABLE IN SINGLE OR DOUBLE ROOF VERSION
SIZE: REDUCIBLE OR ENLARGABLE AS DESIRED
USAGE: VARIOUS PURPOSES
ECONOMICAL: BOTH FROM FINANCIAL AND USAGE POINT OF VIEW
HANDLING: EASY HANDLING AND TRANSPORTATION`,
    accessories: `COMPLETE WITH METAL POLES
IRON PEGS
CARRYING BAG
ASSEMBLY INSTRUCTIONS`,
    packing: `COMPLETE TENT & ACCESSORIES PACKED IN PROTECTIVE BAG`,
    dimensions: `CUSTOMIZABLE SIZE - CAN BE REDUCED OR ENLARGED AS DESIRED
STANDARD DIMENSIONS AVAILABLE ON REQUEST`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST
EASY TRANSPORTATION DUE TO FOLDABLE DESIGN`,
  },
  // Deluxe Tents
  'tents-dulex-ht101': {
    name: 'Arabic Deluxe and Relief Tents HT-101',
    description: 'premium arabic deluxe and relief tent designed for versatile use. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. perfect for various applications with two doors and two windows for ventilation.',
    imageUrl: duluxTentImages['tents-dulex-ht101'],
    details: 'premium arabic deluxe and relief tent designed for versatile use. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. perfect for various applications with two doors and two windows for ventilation.',
    specifications: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 8 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 2
STICKS: BAMBOO`,
    accessories: `BAMBOO STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN POLYPROPYLENE SHEET`,
    dimensions: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 8 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht102': {
    name: 'Arabic Deluxe Tent HT-102',
    description: 'premium arabic deluxe tent with two-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and two windows, using iron sticks for enhanced durability.',
    imageUrl: duluxTentImages['tents-dulex-ht102'],
    details: 'premium arabic deluxe tent with two-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and two windows, using iron sticks for enhanced durability.',
    specifications: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 8 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 2
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON SHEETING`,
    dimensions: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 8 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht103': {
    name: 'Arabic Deluxe Tent HT-103',
    description: 'premium arabic deluxe tent with two-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and two windows, using iron sticks and packed in cotton canvas.',
    imageUrl: duluxTentImages['tents-dulex-ht103'],
    details: 'premium arabic deluxe tent with two-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and two windows, using iron sticks and packed in cotton canvas.',
    specifications: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 8 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 2
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 8 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht104': {
    name: 'Swiss Deluxe Tent HT-104',
    description: 'premium swiss deluxe tent with two-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and two windows, using iron sticks for enhanced stability.',
    imageUrl: duluxTentImages['tents-dulex-ht104'],
    details: 'premium swiss deluxe tent with two-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and two windows, using iron sticks for enhanced stability.',
    specifications: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 8 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 2
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 8 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht105': {
    name: 'Family Round Tent HT-105',
    description: 'premium family round tent with two-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. compact design with one door and two windows, perfect for family use.',
    imageUrl: duluxTentImages['tents-dulex-ht105'],
    details: 'premium family round tent with two-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. compact design with one door and two windows, perfect for family use.',
    specifications: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 7 FEET
WALL HEIGHT: 3 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 1
WINDOWS: 2`,
    accessories: `ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON SHEETING`,
    dimensions: `SIZE: 4X4 YARDS
CENTRAL HEIGHT: 7 FEET
WALL HEIGHT: 3 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht106': {
    name: 'Arabic Deluxe Tent HT-106',
    description: 'premium arabic deluxe tent with larger size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using bamboo sticks.',
    imageUrl: duluxTentImages['tents-dulex-ht106'],
    details: 'premium arabic deluxe tent with larger size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using bamboo sticks.',
    specifications: `SIZE: 6X4 YARDS
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: BAMBOO`,
    accessories: `BAMBOO STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON SHEETING`,
    dimensions: `SIZE: 6X4 YARDS
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht107': {
    name: 'Arabic Deluxe Tent HT-107',
    description: 'premium arabic deluxe tent with larger size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using bamboo sticks.',
    imageUrl: duluxTentImages['tents-dulex-ht107'],
    details: 'premium arabic deluxe tent with larger size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using bamboo sticks.',
    specifications: `SIZE: 6X4 YARDS
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: BAMBOO`,
    accessories: `BAMBOO STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON SHEETING`,
    dimensions: `SIZE: 6X4 YARDS
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht108': {
    name: 'Arabic Deluxe Tent HT-108',
    description: 'premium arabic deluxe tent with larger size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks for enhanced durability.',
    imageUrl: duluxTentImages['tents-dulex-ht108'],
    details: 'premium arabic deluxe tent with larger size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks for enhanced durability.',
    specifications: `SIZE: 6X4 YARDS
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 6X4 YARDS
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht109': {
    name: 'Arabic Deluxe Tent HT-109',
    description: 'premium arabic deluxe tent with square design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks with jamloon frame.',
    imageUrl: duluxTentImages['tents-dulex-ht109'],
    details: 'premium arabic deluxe tent with square design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks with jamloon frame.',
    specifications: `SIZE: 5X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: IRON
FRAME: JAMLOON`,
    accessories: `IRON STICKS
JAMLOON FRAME
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 5X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht110': {
    name: 'Arabic Deluxe Tent HT-110',
    description: 'premium arabic deluxe tent with square design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks with jamloon frame.',
    imageUrl: duluxTentImages['tents-dulex-ht110'],
    details: 'premium arabic deluxe tent with square design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks with jamloon frame.',
    specifications: `SIZE: 5X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: IRON
FRAME: JAMLOON`,
    accessories: `IRON STICKS
JAMLOON FRAME
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 5X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht111': {
    name: 'Arabic Deluxe Tent HT-111',
    description: 'premium arabic deluxe tent with three-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. larger size with two doors and four windows, using iron sticks for enhanced stability.',
    imageUrl: duluxTentImages['tents-dulex-ht111'],
    details: 'premium arabic deluxe tent with three-fold construction. features cotton canvas outer fold and dyed printed sheeting inner fold. larger size with two doors and four windows, using iron sticks for enhanced stability.',
    specifications: `SIZE: 6X4 METER
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6.3 FEET
MAKE: 3 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 6X4 METER
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6.3 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht112': {
    name: 'Swiss Arabic Deluxe Tent HT-112',
    description: 'premium swiss arabic deluxe tent with unique fabric construction. features bait shar fabric outer fold and sadu fabric inner fold. modern design with two doors and four windows, using iron sticks.',
    imageUrl: duluxTentImages['tents-dulex-ht112'],
    details: 'premium swiss arabic deluxe tent with unique fabric construction. features bait shar fabric outer fold and sadu fabric inner fold. modern design with two doors and four windows, using iron sticks.',
    specifications: `SIZE: 6X4 METER
CENTRAL HEIGHT: 3 METER
WALL HEIGHT: 2 METER
MAKE: 2 FOLD
OUTER FOLD: BAIT SHAR FABRIC
INNER FOLD: SADU FABRIC
DOORS: 2
WINDOWS: 4
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 6X4 METER
CENTRAL HEIGHT: 3 METER
WALL HEIGHT: 2 METER`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht113': {
    name: 'Family Round Tent HT-113',
    description: 'premium family round tent with square design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks with jamloon frame.',
    imageUrl: duluxTentImages['tents-dulex-ht113'],
    details: 'premium family round tent with square design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks with jamloon frame.',
    specifications: `SIZE: 5X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: IRON
FRAME: JAMLOON`,
    accessories: `IRON STICKS
JAMLOON FRAME
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 5X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht114': {
    name: 'Arabic Deluxe Tent HT-114',
    description: 'premium arabic deluxe tent with extended size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors, using iron sticks for enhanced durability.',
    imageUrl: duluxTentImages['tents-dulex-ht114'],
    details: 'premium arabic deluxe tent with extended size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors, using iron sticks for enhanced durability.',
    specifications: `SIZE: 7X4 YARDS
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 7X4 YARDS
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht115': {
    name: 'Arabic Deluxe Tent HT-115',
    description: 'premium arabic deluxe tent with unique fabric construction. features bait shar fabric outer fold and sadu fabric inner fold. larger size with two doors and four windows, using iron sticks.',
    imageUrl: duluxTentImages['tents-dulex-ht115'],
    details: 'premium arabic deluxe tent with unique fabric construction. features bait shar fabric outer fold and sadu fabric inner fold. larger size with two doors and four windows, using iron sticks.',
    specifications: `SIZE: 7X5 METER
CENTRAL HEIGHT: 3 METER
WALL HEIGHT: 2 METER
MAKE: 2 FOLD
OUTER FOLD: BAIT SHAR FABRIC
INNER FOLD: SADU FABRIC
DOORS: 2
WINDOWS: 4
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 7X5 METER
CENTRAL HEIGHT: 3 METER
WALL HEIGHT: 2 METER`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht116': {
    name: 'Arabic Deluxe Tent HT-116',
    description: 'premium arabic deluxe tent with large size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using bamboo sticks.',
    imageUrl: duluxTentImages['tents-dulex-ht116'],
    details: 'premium arabic deluxe tent with large size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using bamboo sticks.',
    specifications: `SIZE: 8X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: BAMBOO`,
    accessories: `BAMBOO STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON SHEETING`,
    dimensions: `SIZE: 8X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht117': {
    name: 'Arabic Deluxe Tent HT-117',
    description: 'premium arabic deluxe tent with large size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using bamboo sticks.',
    imageUrl: duluxTentImages['tents-dulex-ht117'],
    details: 'premium arabic deluxe tent with large size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using bamboo sticks.',
    specifications: `SIZE: 8X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: BAMBOO`,
    accessories: `BAMBOO STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON SHEETING`,
    dimensions: `SIZE: 8X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-dulex-ht118': {
    name: 'Arabic Deluxe Tent HT-118',
    description: 'premium arabic deluxe tent with large size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks for enhanced durability.',
    imageUrl: duluxTentImages['tents-dulex-ht118'],
    details: 'premium arabic deluxe tent with large size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. equipped with two doors and four windows, using iron sticks for enhanced durability.',
    specifications: `SIZE: 8X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 8X5 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  // Shelter Tents
  'tents-shelter-ht101': {
    name: 'Arabic Deluxe Shelter Tent HT-101',
    description: 'premium arabic deluxe shelter tent with spacious design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. perfect for various shelter applications with two doors and four windows.',
    imageUrl: shelter101Image,
    details: 'premium arabic deluxe shelter tent with spacious design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. perfect for various shelter applications with two doors and four windows.',
    specifications: `SIZE: 5X10 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 5X10 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-shelter-ht102': {
    name: 'Arabic Deluxe Shelter Tent HT-102',
    description: 'premium arabic deluxe shelter tent with spacious design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. perfect for various shelter applications with two doors and four windows.',
    imageUrl: shelter102Image,
    details: 'premium arabic deluxe shelter tent with spacious design. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. perfect for various shelter applications with two doors and four windows.',
    specifications: `SIZE: 5X10 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 2
WINDOWS: 4
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 5X10 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-shelter-ht103': {
    name: 'Arabic Deluxe Shelter Tent HT-103',
    description: 'premium arabic deluxe shelter tent with extra large size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. spacious design with four doors and four windows for enhanced accessibility.',
    imageUrl: shelter103Image,
    details: 'premium arabic deluxe shelter tent with extra large size. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. spacious design with four doors and four windows for enhanced accessibility.',
    specifications: `SIZE: 6X12 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 4
WINDOWS: 4
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 6X12 YARDS
CENTRAL HEIGHT: 9 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-shelter-ht104': {
    name: 'Party Tent HT-104',
    description: 'premium party tent designed for large events and gatherings. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. spacious design with multiple doors and windows for excellent ventilation and accessibility.',
    imageUrl: shelter104Image,
    details: 'premium party tent designed for large events and gatherings. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. spacious design with multiple doors and windows for excellent ventilation and accessibility.',
    specifications: `SIZE: 10X20 METER
CENTRAL HEIGHT: 12 FEET
WALL HEIGHT: 6.5 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 6
WINDOWS: 8
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN COTTON CANVAS`,
    dimensions: `SIZE: 10X20 METER
CENTRAL HEIGHT: 12 FEET
WALL HEIGHT: 6.5 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-shelter-ht105': {
    name: 'General Purpose Large Tent HT-105',
    description: 'versatile general purpose large tent made of canvas waterproof material. suitable for various applications including events, gatherings, and temporary shelter needs. durable construction for long-term use.',
    imageUrl: shelter105Image,
    details: 'versatile general purpose large tent made of canvas waterproof material. suitable for various applications including events, gatherings, and temporary shelter needs. durable construction for long-term use.',
    specifications: `MATERIAL: CANVAS WATERPROOF
TYPE: GENERAL PURPOSE LARGE TENT
DURABILITY: HIGH
WEATHER RESISTANCE: EXCELLENT
VERSATILITY: MULTIPLE APPLICATIONS`,
    accessories: `COMPLETE WITH METAL POLES
IRON PEGS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN PROTECTIVE MATERIAL`,
    dimensions: `LARGE SIZE - CUSTOMIZABLE
STANDARD DIMENSIONS AVAILABLE ON REQUEST`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-shelter-hospital-frame': {
    name: 'Hospital Frame Tent for 10 person',
    description: 'specialized hospital frame tent designed to accommodate 10 people. made of canvas waterproof material. ideal for medical facilities, field hospitals, and emergency medical services. spacious and well-ventilated design.',
    imageUrl: shelterHospitalImage,
    details: 'specialized hospital frame tent designed to accommodate 10 people. made of canvas waterproof material. ideal for medical facilities, field hospitals, and emergency medical services. spacious and well-ventilated design.',
    specifications: `MATERIAL: CANVAS WATERPROOF
TYPE: HOSPITAL FRAME TENT
CAPACITY: 10 PERSONS
DURABILITY: HIGH
WEATHER RESISTANCE: EXCELLENT
USE: MEDICAL FACILITIES, FIELD HOSPITALS`,
    accessories: `COMPLETE WITH METAL FRAME
IRON PEGS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN PROTECTIVE MATERIAL`,
    dimensions: `DESIGNED FOR 10 PERSON CAPACITY
SPACIOUS INTERIOR FOR MEDICAL EQUIPMENT
STANDARD DIMENSIONS AVAILABLE ON REQUEST`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  // Kuwaiti Deluxe Tents
  'tents-kuwaiti-ht101': {
    name: 'Kuwaiti Deluxe Tent HT-101',
    description: 'premium kuwaiti deluxe tent with traditional arabic design. features high-quality construction with cotton canvas waterproof material. perfect for various applications including events, gatherings, and traditional ceremonies. elegant design with excellent durability.',
    imageUrl: kuwaiti101Image,
    details: 'premium kuwaiti deluxe tent with traditional arabic design. features high-quality construction with cotton canvas waterproof material. perfect for various applications including events, gatherings, and traditional ceremonies. elegant design with excellent durability.',
    specifications: `MATERIAL: COTTON CANVAS WATERPROOF
TYPE: KUWAITI DELUXE TENT HT-101
DESIGN: TRADITIONAL ARABIC STYLE
DURABILITY: HIGH
WEATHER RESISTANCE: EXCELLENT
USE: EVENTS, GATHERINGS, TRADITIONAL CEREMONIES`,
    accessories: `COMPLETE WITH METAL POLES
IRON PEGS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN PROTECTIVE MATERIAL`,
    dimensions: `STANDARD DIMENSIONS AVAILABLE
CUSTOM SIZES ON REQUEST`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-kuwaiti-ht102': {
    name: 'Kuwaiti Deluxe Tent HT-102',
    description: 'premium kuwaiti deluxe tent with enhanced features and spacious design. features high-quality construction with cotton canvas waterproof material. ideal for large gatherings, events, and traditional ceremonies. superior quality with excellent ventilation.',
    imageUrl: kuwaiti102Image,
    details: 'premium kuwaiti deluxe tent with enhanced features and spacious design. features high-quality construction with cotton canvas waterproof material. ideal for large gatherings, events, and traditional ceremonies. superior quality with excellent ventilation.',
    specifications: `MATERIAL: COTTON CANVAS WATERPROOF
TYPE: KUWAITI DELUXE TENT HT-102
DESIGN: TRADITIONAL ARABIC STYLE
DURABILITY: HIGH
WEATHER RESISTANCE: EXCELLENT
USE: LARGE GATHERINGS, EVENTS, TRADITIONAL CEREMONIES`,
    accessories: `COMPLETE WITH METAL POLES
IRON PEGS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN PROTECTIVE MATERIAL`,
    dimensions: `SPACIOUS DESIGN
STANDARD DIMENSIONS AVAILABLE
CUSTOM SIZES ON REQUEST`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-kuwaiti-ht103': {
    name: 'Kuwaiti Deluxe Tent HT-103',
    description: 'premium kuwaiti deluxe tent with luxury design and premium features. features high-quality construction with cotton canvas waterproof material. perfect for high-end events, celebrations, and traditional ceremonies. elegant and sophisticated design with exceptional quality.',
    imageUrl: kuwaiti103Image,
    details: 'premium kuwaiti deluxe tent with luxury design and premium features. features high-quality construction with cotton canvas waterproof material. perfect for high-end events, celebrations, and traditional ceremonies. elegant and sophisticated design with exceptional quality.',
    specifications: `MATERIAL: COTTON CANVAS WATERPROOF
TYPE: KUWAITI DELUXE TENT HT-103
DESIGN: LUXURY TRADITIONAL ARABIC STYLE
DURABILITY: HIGH
WEATHER RESISTANCE: EXCELLENT
USE: HIGH-END EVENTS, CELEBRATIONS, TRADITIONAL CEREMONIES`,
    accessories: `COMPLETE WITH METAL POLES
IRON PEGS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN PROTECTIVE MATERIAL`,
    dimensions: `LUXURY SPACIOUS DESIGN
STANDARD DIMENSIONS AVAILABLE
CUSTOM SIZES ON REQUEST`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  // Multipurpose Tents
  'tents-multipurpose-bath-ht101': {
    name: 'Bath Tent HT-101',
    description: 'compact bath tent designed for personal hygiene and privacy. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. perfect for camping, outdoor activities, and temporary bathroom facilities.',
    imageUrl: multipurposeBathImage,
    details: 'compact bath tent designed for personal hygiene and privacy. features two-fold construction with cotton canvas outer fold and dyed printed sheeting inner fold. perfect for camping, outdoor activities, and temporary bathroom facilities.',
    specifications: `SIZE: 5X5 FEET
CENTRAL HEIGHT: 7 FEET
WALL HEIGHT: 6 FEET
MAKE: 2 FOLD
OUTER FOLD: COTTON CANVAS
INNER FOLD: DYED PRINTED SHEETING
DOORS: 1
STICKS: BAMBOO`,
    accessories: `BAMBOO STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN PROTECTIVE MATERIAL`,
    dimensions: `SIZE: 5X5 FEET
CENTRAL HEIGHT: 7 FEET
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-multipurpose-wall-ht102': {
    name: 'Wall Tent HT-102',
    description: 'versatile wall tent with single fold construction. features cotton canvas outer fold for durability and weather resistance. available in multiple sizes for various applications. ideal for temporary shelter and outdoor events.',
    imageUrl: multipurposeWall102Image,
    details: 'versatile wall tent with single fold construction. features cotton canvas outer fold for durability and weather resistance. available in multiple sizes for various applications. ideal for temporary shelter and outdoor events.',
    specifications: `SIZE: 8, 10, 12 YARDS
WALL HEIGHT: 6 FEET
MAKE: SINGLE FOLD
OUTER FOLD: COTTON CANVAS
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN POLYPROPYLENE SHEET`,
    dimensions: `SIZE: 8, 10, 12 YARDS (MULTIPLE SIZES AVAILABLE)
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-multipurpose-wall-ht103': {
    name: 'Wall Tent HT-103',
    description: 'versatile wall tent with single fold construction. features cotton canvas outer fold for durability and weather resistance. available in multiple sizes for various applications. ideal for temporary shelter and outdoor events.',
    imageUrl: multipurposeWall103Image,
    details: 'versatile wall tent with single fold construction. features cotton canvas outer fold for durability and weather resistance. available in multiple sizes for various applications. ideal for temporary shelter and outdoor events.',
    specifications: `SIZE: 8, 10, 12 YARDS
WALL HEIGHT: 6 FEET
MAKE: SINGLE FOLD
OUTER FOLD: COTTON CANVAS
STICKS: IRON`,
    accessories: `IRON STICKS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN POLYPROPYLENE SHEET`,
    dimensions: `SIZE: 8, 10, 12 YARDS (MULTIPLE SIZES AVAILABLE)
WALL HEIGHT: 6 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  'tents-multipurpose-camping-ht104': {
    name: 'Camping Tent HT-104',
    description: 'premium camping tent designed for outdoor adventures. features two-fold construction with cotton canvas outer fly and cotton sheeting inner fly. compact design with one door and two windows for ventilation. perfect for camping and outdoor activities.',
    imageUrl: multipurposeCampingImage,
    details: 'premium camping tent designed for outdoor adventures. features two-fold construction with cotton canvas outer fly and cotton sheeting inner fly. compact design with one door and two windows for ventilation. perfect for camping and outdoor activities.',
    specifications: `SIZE: 3X3 METER
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6.5 FEET
MAKE: TWO FOLD
OUTER FLY: COTTON CANVAS
INNER FLY: COTTON SHEETING
DOORS: 1
WINDOWS: 2`,
    accessories: `COMPLETE WITH METAL POLES
IRON PEGS
ASSEMBLY INSTRUCTIONS`,
    packing: `PACKED IN PROTECTIVE MATERIAL`,
    dimensions: `SIZE: 3X3 METER
CENTRAL HEIGHT: 8.5 FEET
WALL HEIGHT: 6.5 FEET`,
    shipping: `STANDARD SHIPPING: AVAILABLE
CUSTOM SHIPPING: ON REQUEST`,
  },
  // Filter Cloths
  'filter-cotton-90': {
    name: 'Cotton Filter Cloth-90',
    description: 'ch.hakim ali ansari enterprises also manufacture filter cloth. filter cloth is used for filtration purposes in various industries such as cooking oil industries, sugar industries, soap industries, chemical industries, lubricant/grease industries, cement industries, food & beverages industries, glass industries, steel industries, and paint industries. cotton filter cloth 90 is manufactured in 100% cotton and is ideal for various industrial filtration applications.',
    imageUrl: fc1Image,
    details: 'ch.hakim ali ansari enterprises utilizes the latest precision, high technology equipment in its filter cloth manufacturing operations. cotton filter cloth 90 is manufactured in 100% cotton and ensures quick and responsive turnaround for your satisfaction. we work with trusted suppliers in close proximity to our manufacturing locations to ensure that we have on-hand the cloth materials needed for your specific application.',
    specifications: `A WIDTH: 34" 26" STANDARD (ALL SIZE AVAILABLE)
B ENDS: 56-58 PER INCH
C PICKS: 30-32 PER INCH
D PLY & COUNT OF ENDS: 16/4 10/3 10/4
E PLY & COUNT OF PICKS: 16/4 10/3 10/4
APPLICATIONS: COOKING OIL INDUSTRIES, SUGAR INDUSTRIES, SOAP INDUSTRIES, CHEMICAL INDUSTRIES, LUBRICANT/GREASE INDUSTRIES, CEMENT INDUSTRIES, FOOD & BEVERAGES INDUSTRIES, GLASS INDUSTRIES, STEEL INDUSTRIES, PAINT INDUSTRIES
MATERIAL: 100% COTTON`,
  },
  'filter-pc-96': {
    name: 'Polyester Cotton(PC) Filter Cloth-96',
    description: 'polyester cotton filter cloth 96 is manufactured in 50:50 poly cotton mixed blends. filter cloth is used for filtration purposes in various industries such as cooking oil industries, sugar industries, soap industries, chemical industries, lubricant/grease industries, cement industries, food & beverages industries, glass industries, steel industries, and paint industries.',
    imageUrl: fc2Image,
    details: 'ch.hakim ali ansari enterprises utilizes the latest precision, high technology equipment in its filter cloth manufacturing operations. polyester cotton filter cloth 96 combines the benefits of both polyester and cotton fibers, providing excellent filtration performance and durability for various industrial applications.',
    specifications: `A WIDTH: 34" 26" STANDARD (ALL SIZE AVAILABLE)
B ENDS: 56-57 PER INCH
C PICKS: 30-32 PER INCH
D PLY & COUNT OF ENDS: 16/4 10/3 10/4
E PLY & COUNT OF PICKS: 16/4 10/3 10/4
APPLICATIONS: COOKING OIL INDUSTRIES, SUGAR INDUSTRIES, SOAP INDUSTRIES, CHEMICAL INDUSTRIES, LUBRICANT/GREASE INDUSTRIES, CEMENT INDUSTRIES, FOOD & BEVERAGES INDUSTRIES, GLASS INDUSTRIES, STEEL INDUSTRIES, PAINT INDUSTRIES
MATERIAL: 50:50 POLYESTER COTTON MIXED BLEND`,
  },
  'filter-pure-polyester': {
    name: 'Pure Polyester(P.P) Filter Cloth',
    description: 'pure polyester filter cloth is manufactured in 100% polyester. filter cloth is used for filtration purposes in various industries such as cooking oil industries, sugar industries, soap industries, chemical industries, lubricant/grease industries, cement industries, food & beverages industries, glass industries, steel industries, and paint industries.',
    imageUrl: fc3Image,
    details: 'ch.hakim ali ansari enterprises utilizes the latest precision, high technology equipment in its filter cloth manufacturing operations. pure polyester filter cloth offers superior chemical resistance and durability, making it ideal for demanding filtration applications in various industrial sectors.',
    specifications: `A WIDTH: 34" 26" STANDARD (ALL SIZE AVAILABLE)
B ENDS: 56-57 PER INCH
C PICKS: 30-32 PER INCH
D PLY & COUNT OF ENDS: 16/4 10/3 10/4
E PLY & COUNT OF PICKS: 16/4 10/3 10/4
APPLICATIONS: COOKING OIL INDUSTRIES, SUGAR INDUSTRIES, SOAP INDUSTRIES, CHEMICAL INDUSTRIES, LUBRICANT/GREASE INDUSTRIES, CEMENT INDUSTRIES, FOOD & BEVERAGES INDUSTRIES, GLASS INDUSTRIES, STEEL INDUSTRIES, PAINT INDUSTRIES
MATERIAL: 100% POLYESTER`,
  },
  'filter-cotton-92': {
    name: 'Cotton Filter Cloth-92',
    description: 'cotton filter cloth 92 is manufactured in 100% cotton. filter cloth is used for filtration purposes in various industries such as cooking oil industries, sugar industries, soap industries, chemical industries, lubricant/grease industries, cement industries, food & beverages industries, glass industries, steel industries, and paint industries.',
    imageUrl: fc7Image,
    details: 'ch.hakim ali ansari enterprises utilizes the latest precision, high technology equipment in its filter cloth manufacturing operations. cotton filter cloth 92 provides excellent filtration performance with natural cotton fibers, suitable for various industrial filtration applications requiring reliable and efficient filtration.',
    specifications: `A WIDTH: 34" 26" STANDARD (ALL SIZE AVAILABLE)
B ENDS: 52-54 PER INCH
C PICKS: 28-30 PER INCH
D PLY & COUNT OF ENDS: 10/3 10/4
E PLY & COUNT OF PICKS: 10/3 10/4
APPLICATIONS: COOKING OIL INDUSTRIES, SUGAR INDUSTRIES, SOAP INDUSTRIES, CHEMICAL INDUSTRIES, LUBRICANT/GREASE INDUSTRIES, CEMENT INDUSTRIES, FOOD & BEVERAGES INDUSTRIES, GLASS INDUSTRIES, STEEL INDUSTRIES, PAINT INDUSTRIES
MATERIAL: 100% COTTON`,
  },
  'filter-candle': {
    name: 'Candle Filter Cloth Polypropylene',
    description: 'candle filter cloth polypropylene is specifically designed for candle filter applications. filter cloth is used for filtration purposes in various industries such as cooking oil industries, sugar industries, soap industries, chemical industries, lubricant/grease industries, cement industries, food & beverages industries, glass industries, steel industries, and paint industries.',
    imageUrl: fc2Image,
    details: 'ch.hakim ali ansari enterprises utilizes the latest precision, high technology equipment in its filter cloth manufacturing operations. candle filter cloth polypropylene offers excellent chemical resistance and is specifically engineered for candle filter systems, providing superior filtration performance in demanding industrial environments.',
    specifications: `A WIDTH: 34" 26" STANDARD (ALL SIZE AVAILABLE)
B ENDS PER INCH: 90
C PICKS: 144-148 PER INCH
D PLY & COUNT OF ENDS: 300/2
E PLY & COUNT OF PICKS: 3000/2
APPLICATIONS: COOKING OIL INDUSTRIES, SUGAR INDUSTRIES, SOAP INDUSTRIES, CHEMICAL INDUSTRIES, LUBRICANT/GREASE INDUSTRIES, CEMENT INDUSTRIES, FOOD & BEVERAGES INDUSTRIES, GLASS INDUSTRIES, STEEL INDUSTRIES, PAINT INDUSTRIES
MATERIAL: POLYPROPYLENE`,
  },
  'filter-danier': {
    name: 'Danier Filter Cloth',
    description: 'danier filter cloth is a specialized filter cloth designed for specific industrial filtration applications. filter cloth is used for filtration purposes in various industries such as cooking oil industries, sugar industries, soap industries, chemical industries, lubricant/grease industries, cement industries, food & beverages industries, glass industries, steel industries, and paint industries.',
    imageUrl: fc1Image,
    details: 'ch.hakim ali ansari enterprises utilizes the latest precision, high technology equipment in its filter cloth manufacturing operations. danier filter cloth is engineered to meet specific filtration requirements, providing reliable performance for various industrial applications.',
    specifications: `APPLICATIONS: COOKING OIL INDUSTRIES, SUGAR INDUSTRIES, SOAP INDUSTRIES, CHEMICAL INDUSTRIES, LUBRICANT/GREASE INDUSTRIES, CEMENT INDUSTRIES, FOOD & BEVERAGES INDUSTRIES, GLASS INDUSTRIES, STEEL INDUSTRIES, PAINT INDUSTRIES
CUSTOM SPECIFICATIONS: AVAILABLE ON REQUEST
CONTACT US FOR DETAILED SPECIFICATIONS AND CUSTOMIZATION OPTIONS`,
  },
  'filter-polypropylene': {
    name: 'Polypropylene Filter Cloth',
    description: 'polypropylene filter cloth is manufactured using polypropylene fibers, offering excellent chemical resistance and durability. filter cloth is used for filtration purposes in various industries such as cooking oil industries, sugar industries, soap industries, chemical industries, lubricant/grease industries, cement industries, food & beverages industries, glass industries, steel industries, and paint industries.',
    imageUrl: fc3Image,
    details: 'ch.hakim ali ansari enterprises utilizes the latest precision, high technology equipment in its filter cloth manufacturing operations. polypropylene filter cloth provides superior performance in harsh chemical environments and is ideal for applications requiring excellent chemical resistance and long-lasting filtration capabilities.',
    specifications: `APPLICATIONS: COOKING OIL INDUSTRIES, SUGAR INDUSTRIES, SOAP INDUSTRIES, CHEMICAL INDUSTRIES, LUBRICANT/GREASE INDUSTRIES, CEMENT INDUSTRIES, FOOD & BEVERAGES INDUSTRIES, GLASS INDUSTRIES, STEEL INDUSTRIES, PAINT INDUSTRIES
MATERIAL: POLYPROPYLENE
CUSTOM SPECIFICATIONS: AVAILABLE ON REQUEST
CONTACT US FOR DETAILED SPECIFICATIONS AND CUSTOMIZATION OPTIONS`,
  },
  // Filter Bags
  'filter-bags-5': {
    name: '5 Microns Filter Bags',
    description: '5 microns filter bags are designed for critical purity applications requiring sub-visible particle removal. these high-performance filter bags provide exceptional filtration efficiency for industries demanding the highest level of purity and contamination control. ideal for pharmaceutical manufacturing, biotech applications, food and beverage processing, electronics manufacturing, and other precision industries where even the smallest particles must be removed from liquids.',
    imageUrl: filterBag5Image,
    details: 'ch.hakim ali ansari enterprises manufactures premium quality 5 microns filter bags using advanced filtration technology and precision engineering. these filter bags are engineered to capture particles as small as 5 micrometers, ensuring superior filtration performance and product purity. with excellent chemical compatibility and high flow rates, our 5 microns filter bags are designed to maintain consistent filtration efficiency throughout their service life. suitable for use in filter housings and bag filtration systems, these bags provide reliable performance in demanding industrial environments.',
    specifications: `MICRON RATING: 5 MICRONS (5 ΜM)
FILTRATION TYPE: ABSOLUTE RATING
PARTICLE REMOVAL: PARTICLES 5 MICRONS AND LARGER
EFFICIENCY: HIGH EFFICIENCY FILTRATION FOR SUB-VISIBLE PARTICLES
FLOW RATE: OPTIMIZED FOR HIGH FLOW APPLICATIONS
PRESSURE DROP: LOW INITIAL PRESSURE DROP (TYPICALLY 2.0 PSI OR LESS)
MAXIMUM DIFFERENTIAL PRESSURE: 20-25 PSI (RECOMMENDED CHANGE POINT)
APPLICATIONS: PHARMACEUTICAL MANUFACTURING, BIOTECH APPLICATIONS, FOOD & BEVERAGE PROCESSING, ELECTRONICS MANUFACTURING, PRECISION INDUSTRIES, CRITICAL PURITY APPLICATIONS, SUB-VISIBLE PARTICLE REMOVAL
MATERIAL: PREMIUM FILTRATION MEDIA (POLYESTER FELT, POLYPROPYLENE, OR SPECIALIZED MATERIALS BASED ON APPLICATION)
TEMPERATURE RATING: UP TO 121.1°C (DEPENDING ON MATERIAL TYPE)
COMPATIBILITY: EXCELLENT CHEMICAL COMPATIBILITY FOR VARIOUS LIQUIDS
SERVICE LIFE: LONG-LASTING WITH PROPER MAINTENANCE AND OPERATING CONDITIONS`,
  },
  'filter-bags-10': {
    name: '10 Microns Filter Bags',
    description: '10 microns filter bags are engineered for fine polishing and pre-filtration applications in various industrial processes. these versatile filter bags provide excellent filtration performance for removing fine particles and contaminants from liquids, making them ideal for chemical processing, paint and coatings manufacturing, water treatment systems, and general industrial filtration applications. with balanced filtration efficiency and flow characteristics, 10 microns filter bags offer optimal performance for medium-fine filtration requirements.',
    imageUrl: filterBag10Image,
    details: 'ch.hakim ali ansari enterprises produces high-quality 10 microns filter bags designed to meet the demanding requirements of modern industrial filtration systems. these filter bags effectively capture particles down to 10 micrometers in size, providing reliable filtration for a wide range of applications. constructed from durable filtration media, our 10 microns filter bags offer excellent contaminant holding capacity and consistent performance. suitable for use as pre-filters or polishing filters in multi-stage filtration systems, these bags help extend the life of downstream filters while maintaining system efficiency.',
    specifications: `MICRON RATING: 10 MICRONS (10 ΜM)
FILTRATION TYPE: ABSOLUTE RATING
PARTICLE REMOVAL: PARTICLES 10 MICRONS AND LARGER
EFFICIENCY: HIGH EFFICIENCY FILTRATION FOR FINE PARTICLES
FLOW RATE: OPTIMIZED FOR MEDIUM TO HIGH FLOW APPLICATIONS
PRESSURE DROP: LOW INITIAL PRESSURE DROP (TYPICALLY 2.0 PSI OR LESS)
MAXIMUM DIFFERENTIAL PRESSURE: 20-25 PSI (RECOMMENDED CHANGE POINT)
APPLICATIONS: CHEMICAL PROCESSING, PAINT & COATINGS MANUFACTURING, WATER TREATMENT SYSTEMS, PRE-FILTRATION STAGES, POLISHING FILTRATION, GENERAL INDUSTRIAL FILTRATION, LIQUID PURIFICATION
MATERIAL: DURABLE FILTRATION MEDIA (POLYESTER FELT, POLYPROPYLENE, OR SPECIALIZED MATERIALS BASED ON APPLICATION)
TEMPERATURE RATING: UP TO 121.1°C (DEPENDING ON MATERIAL TYPE)
COMPATIBILITY: EXCELLENT CHEMICAL COMPATIBILITY FOR VARIOUS LIQUIDS AND SOLUTIONS
SERVICE LIFE: LONG-LASTING WITH PROPER MAINTENANCE AND OPERATING CONDITIONS
CONTAMINANT HOLDING CAPACITY: HIGH DIRT HOLDING CAPACITY FOR EXTENDED SERVICE LIFE`,
  },
  'filter-bags-25': {
    name: '25 Microns Filter Bags',
    description: '25 microns filter bags are designed for general-purpose filtration applications requiring efficient removal of medium-sized particles and contaminants. these versatile filter bags are ideal for metalworking fluid filtration, general system efficiency improvements, initial filtration stages, and applications where moderate filtration precision is required. with excellent flow characteristics and contaminant holding capacity, 25 microns filter bags provide cost-effective filtration solutions for a wide range of industrial applications.',
    imageUrl: filterBag25Image,
    details: 'ch.hakim ali ansari enterprises manufactures reliable 25 microns filter bags that deliver consistent filtration performance for general industrial applications. these filter bags effectively remove particles down to 25 micrometers, providing efficient filtration while maintaining high flow rates and low pressure drop. constructed from robust filtration media, our 25 microns filter bags are designed to handle high contaminant loads while maintaining filtration efficiency. ideal for use in bag filtration systems, these bags offer excellent value and performance for general-purpose filtration needs across various industries.',
    specifications: `MICRON RATING: 25 MICRONS (25 ΜM)
FILTRATION TYPE: ABSOLUTE RATING
PARTICLE REMOVAL: PARTICLES 25 MICRONS AND LARGER
EFFICIENCY: EFFICIENT FILTRATION FOR MEDIUM-SIZED PARTICLES
FLOW RATE: HIGH FLOW RATE CAPABILITY WITH MINIMAL PRESSURE DROP
PRESSURE DROP: LOW INITIAL PRESSURE DROP (TYPICALLY 2.0 PSI OR LESS)
MAXIMUM DIFFERENTIAL PRESSURE: 20-25 PSI (RECOMMENDED CHANGE POINT)
APPLICATIONS: METALWORKING FLUID FILTRATION, GENERAL SYSTEM EFFICIENCY IMPROVEMENTS, INITIAL FILTRATION STAGES, COARSE FILTRATION APPLICATIONS, GENERAL-PURPOSE INDUSTRIAL FILTRATION, LIQUID CLARIFICATION, CONTAMINANT REMOVAL
MATERIAL: ROBUST FILTRATION MEDIA (POLYESTER FELT, POLYPROPYLENE, OR SPECIALIZED MATERIALS BASED ON APPLICATION)
TEMPERATURE RATING: UP TO 121.1°C (DEPENDING ON MATERIAL TYPE)
COMPATIBILITY: EXCELLENT CHEMICAL COMPATIBILITY FOR VARIOUS LIQUIDS AND FLUIDS
SERVICE LIFE: LONG-LASTING WITH PROPER MAINTENANCE AND OPERATING CONDITIONS
CONTAMINANT HOLDING CAPACITY: HIGH DIRT HOLDING CAPACITY FOR EXTENDED SERVICE LIFE
COST-EFFECTIVE: OPTIMAL BALANCE OF FILTRATION EFFICIENCY AND COST`,
  },
  // Tarpaulins
  'tarpaulin-canvas': {
    name: 'Canvas Tarpaulin',
    description: 'As a manufacturer of canvas tarpaulins, we specialize in producing high-quality, durable tarps for a variety of outdoor applications. Our canvas tarpaulins are made from the highest quality cotton or polyester fabric, which is coated with a waterproof and/or water-resistant material to ensure optimal protection from the elements. We have a wide range of canvas tarpaulins available in different sizes, weights, and colors to suit various needs and preferences. Our tarps are designed to withstand harsh weather conditions, resist tearing and puncturing, and provide reliable and long-lasting protection for your equipment, vehicles, boats, and goods.',
    imageUrl: tarpulin1Image,
    details: 'At our manufacturing facility, we use advanced technology and techniques to ensure that every canvas tarpaulin meets our strict quality standards. We are committed to providing our customers with superior products and outstanding customer service, and we pride ourselves on our ability to deliver customized solutions that meet the unique needs of our clients. Whether you are in the construction, agriculture, or transportation industry, or simply need a reliable tarpaulin for your personal use, we have the expertise and experience to provide you with the best canvas tarpaulin solution for your needs.',
    specifications: `MATERIALS: GREIGE/GREY FABRIC, COTTON CANVAS WATERPROOF, COTTON CANVAS ROT PROOF, COTTON CANVAS FIRE RETARDANT, DYED COTTON CANVAS, BLEACHED CANVAS, STRIPPED CANVAS, CANVAS INCLUDING PC
APPLICATIONS: PROTECTION OF OUTDOOR EQUIPMENT, VEHICLES, BOATS, AND GOODS FROM RAIN, WIND, AND SUN. SHELTER FOR TEMPORARY SHELTERS OR TENTS FOR OUTDOOR EVENTS, CAMPING, OR EMERGENCY SITUATIONS. CONSTRUCTION TO COVER AND PROTECT BUILDING MATERIALS, TOOLS, AND EQUIPMENT FROM DUST, DEBRIS, AND MOISTURE. AGRICULTURE TO COVER CROPS, PROTECT MACHINERY, AND CREATE TEMPORARY STORAGE SHELTERS. TRANSPORT TO COVER AND PROTECT CARGO DURING SHIPPING AND TRANSPORT. PAINTING AS DROP CLOTHS TO PROTECT FLOORS AND SURFACES. ENTERTAINMENT AS STAGE CURTAINS, BACKDROPS, AND SOUND BARRIERS. OUTDOOR ACTIVITIES SUCH AS CAMPING, HIKING, AND PICNICS AS GROUND COVERS, SHADE SHELTERS, AND RAIN PROTECTION`,
  },
  'tarpaulin-grey': {
    name: 'Grey Tarpaulin',
    description: 'Canvas grey tarpaulins are a type of tarpaulin made from woven cotton or polyester fabric that is dyed in a shade of grey. The canvas material is known for its strength, durability, and resistance to tearing and puncturing, making it a popular choice for outdoor applications that require long-lasting protection from the elements. Canvas grey tarpaulins are often used for covering and protecting equipment, machinery, vehicles, boats, and other goods in outdoor settings. They are also commonly used for creating temporary shelters, tents, and awnings for camping, events, and emergency situations.',
    imageUrl: tarpulin2Image,
    details: 'The color grey is often chosen for canvas tarpaulins as it helps to blend in with outdoor surroundings and does not stand out as much as brighter colors. This can be particularly important for applications such as hunting or military operations, where staying concealed is a priority. When choosing a canvas grey tarpaulin, it is important to consider the quality of the fabric and the strength of the stitching. High-quality canvas tarpaulins are made from tightly woven fabric and are reinforced with double-stitching or triple-stitching to provide added strength and durability. Overall, canvas grey tarpaulins are a reliable and durable choice for a variety of outdoor applications, providing protection from the elements while blending in with the surroundings.',
    specifications: `MATERIAL: WOVEN COTTON OR POLYESTER FABRIC DYED GREY
APPLICATIONS: COVERING AND PROTECTING EQUIPMENT, MACHINERY, VEHICLES, BOATS, AND GOODS IN OUTDOOR SETTINGS. TEMPORARY SHELTERS, TENTS, AND AWNINGS FOR CAMPING, EVENTS, AND EMERGENCY SITUATIONS. HUNTING OR MILITARY OPERATIONS WHERE CONCEALMENT IS A PRIORITY
QUALITY: TIGHTLY WOVEN FABRIC, DOUBLE-STITCHING OR TRIPLE-STITCHING FOR ADDED STRENGTH AND DURABILITY`,
  },
  'tarpaulin-heavy-duty': {
    name: 'Heavy Duty Waterproof Tarpaulin',
    description: 'Waterproof canvas tarpaulins are commonly used for outdoor applications that require protection from rain, snow, and other forms of moisture. They are often used to cover and protect equipment, vehicles, boats, and goods, as well as for creating temporary shelters and tents for camping, events, and emergency situations. When choosing a waterproof canvas tarpaulin, it is important to consider the quality of the fabric and the waterproof coating. High-quality canvas tarpaulins are made from a durable and tightly woven fabric, and are coated with a high-quality waterproof material that provides reliable and long-lasting protection from the elements.',
    imageUrl: tarpulin3Image,
    details: 'In addition to being waterproof, canvas tarpaulins are also known for their strength, durability, and resistance to tearing and puncturing, making them a popular choice for a variety of outdoor applications. We produce 100% Cotton Canvas. Waterproof + Fireproofing is optional. Our Tarpaulin is rot-proof and UV Resistant. Canvas stitched together to make custom sizes.',
    specifications: `MATERIAL: 100% COTTON CANVAS
OPTIONS: WATERPROOF + FIREPROOFING OPTIONAL
PROPERTIES: ROT-PROOF, UV RESISTANT
CONSTRUCTION: CANVAS STITCHED TOGETHER TO MAKE CUSTOM SIZES
WEIGHT: 220 GSM TO 810 GSM
EYELETS: STEEL, BRASS OR ALUMINIUM
COLOUR: INFINITE COLOUR OPTIONS
APPLICATIONS: COVER AND PROTECT EQUIPMENT, VEHICLES, BOATS, AND GOODS. TEMPORARY SHELTERS AND TENTS FOR CAMPING, EVENTS, AND EMERGENCY SITUATIONS`,
  },
  'tarpaulin-pe': {
    name: 'PE Tarpaulin',
    description: 'PE (polyethylene) tarpaulins are lightweight, durable tarps made from polyethylene material. They are widely used for outdoor protection, covering equipment, construction sites, and general-purpose applications. PE tarpaulins offer good water resistance and UV resistance, making them suitable for various weather conditions.',
    imageUrl: tarpulin4Image,
    details: 'Our PE tarpaulins are manufactured to high quality standards and are available in various weights and sizes to meet different application requirements. They are cost-effective and provide reliable protection for a wide range of uses.',
    specifications: `MATERIAL: POLYETHYLENE (PE)
PROPERTIES: LIGHTWEIGHT, WATER RESISTANT, UV RESISTANT
APPLICATIONS: OUTDOOR PROTECTION, COVERING EQUIPMENT, CONSTRUCTION SITES, GENERAL-PURPOSE COVERING
CUSTOM SIZES: AVAILABLE ON REQUEST`,
  },
  'tarpaulin-fire-retardant': {
    name: 'Fire Retardant Tarpaulin',
    description: 'As manufacturers of fire retardant tarpaulins, we specialize in producing high-quality, flame-resistant tarps for a variety of applications. Our fire retardant tarpaulins are designed to prevent or slow down the spread of flames, providing additional safety and protection in environments where fires are a risk. We use advanced technology and techniques to ensure that our fire retardant tarpaulins meet the highest safety standards and regulations.',
    imageUrl: tarpulin3Image,
    details: 'Our fire retardant tarpaulins are made from a variety of materials, including vinyl, polyester, and canvas, which are treated with fire-retardant chemicals or coatings to increase their fire resistance. They are ideal for use in industries such as construction, transportation, agriculture, and entertainment, as well as for personal use in homes and outdoor activities. They are commonly used to cover and protect equipment, machinery, and materials that may be at risk of catching fire, as well as for creating fire-resistant barriers, tents, and shelters. We are committed to providing our customers with superior products and outstanding customer service, and we pride ourselves on our ability to deliver customized solutions that meet the unique needs of our clients.',
    specifications: `MATERIALS: VINYL, POLYESTER, CANVAS TREATED WITH FIRE-RETARDANT CHEMICALS OR COATINGS
APPLICATIONS: CONSTRUCTION, TRANSPORTATION, AGRICULTURE, ENTERTAINMENT, PERSONAL USE. COVER AND PROTECT EQUIPMENT, MACHINERY, AND MATERIALS AT RISK OF CATCHING FIRE. FIRE-RESISTANT BARRIERS, TENTS, AND SHELTERS
CUSTOMIZATION: STANDARD SIZES AND CUSTOMIZED SOLUTIONS AVAILABLE`,
  },
  // Canvas products
  'canvas-cloth': {
    name: 'Canvas Cloth',
    description: 'Premium cotton canvas cloth for tents, tarpaulins, and protective covers. High-quality canvas for various industrial and commercial applications with excellent strength and durability.',
    imageUrl: cc1Image,
    details: 'Our canvas cloth is manufactured to high quality standards. Suitable for industrial and commercial use with excellent strength and durability. Available in various weights and finishes. Cotton canvas is a renewable, biodegradable resource and is widely used for outdoor gear, industrial applications, home decor, and military or emergency services.',
    specifications: `MATERIAL: COTTON CANVAS
APPLICATIONS: TENTS, TARPAULINS, PROTECTIVE COVERS, INDUSTRIAL FABRICATION, OUTDOOR GEAR, AWNINGS
QUALITY: PREMIUM DURABILITY AND PERFORMANCE
PROPERTIES: BREATHABLE, NATURAL FIBER, CUSTOM WIDTHS AND WEIGHTS AVAILABLE`,
  },
  'canvas-waterproof': {
    name: 'Waterproof Canvas Cloth / Fabric',
    description: 'Waterproof canvas cloth is a type of fabric that is treated or coated to be resistant to water. It is commonly made from a blend of cotton and synthetic fibers, such as polyester or nylon, to provide strength and durability. The fabric is coated with a waterproofing agent or treated with a chemical finish to make it waterproof. It is made from cotton that has been treated to repel water. This treatment can be applied in various ways, such as using chemical coatings or laminating the fabric with a waterproof material.',
    imageUrl: cc2Image,
    details: 'Waterproof cotton canvas is used for outdoor gear (tents, tarpaulins, raincoats, boat covers), industrial applications (sails, awnings, covers for machinery), home decor (outdoor furniture covers and cushions), and military and emergency services (tents, ponchos, survival gear). Key benefits include durability (resistant to tears, rips, and water), weatherproof protection against rain, snow, and moisture, breathability for comfort in warmer climates, and natural fiber—cotton is a renewable and biodegradable resource.',
    specifications: `MATERIAL: COTTON BLEND WITH SYNTHETIC FIBERS (POLYESTER/NYLON), WATERPROOF COATING OR CHEMICAL FINISH
APPLICATIONS: OUTDOOR GEAR – TENTS, TARPAULINS, RAINCOATS, BOAT COVERS. INDUSTRIAL – SAILS, AWNINGS, MACHINERY COVERS. HOME DECOR – OUTDOOR FURNITURE COVERS, CUSHIONS. MILITARY & EMERGENCY – TENTS, PONCHOS, SURVIVAL GEAR
BENEFITS: DURABILITY – RESISTANT TO TEARS, RIPS, AND WATER. WEATHERPROOF – PROTECTS AGAINST RAIN, SNOW, MOISTURE. BREATHABLE – AIR CIRCULATION FOR COMFORT. NATURAL FIBER – RENEWABLE, BIODEGRADABLE`,
  },
  'canvas-fireproof': {
    name: 'Fire Retardant Canvas Cloth',
    description: 'Fire retardant canvas cloth is treated with flame-retardant chemicals to slow or prevent the spread of fire. Ideal for applications where safety and compliance are required—industrial sites, events, military, and emergency services.',
    imageUrl: cc3Image,
    details: 'Our fire retardant canvas meets relevant safety standards and is suitable for tents, barriers, covers, and shelters where fire resistance is essential. The fabric retains the strength and durability of cotton canvas while offering added protection against ignition and flame spread.',
    specifications: `MATERIAL: COTTON CANVAS, FIRE-RETARDANT TREATMENT
APPLICATIONS: INDUSTRIAL, EVENTS, SAFETY BARRIERS, MILITARY, EMERGENCY SERVICES, TENTS, SHELTERS
PROPERTIES: FLAME RETARDANT, DURABLE, TEAR RESISTANT
COMPLIANCE: MEETS RELEVANT FIRE SAFETY STANDARDS`,
  },
  'canvas-heavy-duty': {
    name: 'Heavy Duty Cotton Canvas Cloth',
    description: 'Heavy duty cotton canvas cloth for demanding applications. Extra strength and thickness for maximum durability and longevity. Reinforced weave and higher weight for extended service life.',
    imageUrl: cc1Image,
    details: 'Heavy duty construction for industrial and commercial use. Ideal for construction covers, transport tarpaulins, machinery covers, and any application requiring extra strength and abrasion resistance. Available in custom weights and widths.',
    specifications: `MATERIAL: HEAVY DUTY COTTON CANVAS
APPLICATIONS: INDUSTRIAL, CONSTRUCTION, TRANSPORT COVERS, MACHINERY COVERS
PROPERTIES: EXTRA STRENGTH, THICK CONSTRUCTION, ABRASION RESISTANT
CUSTOM: WIDTHS AND WEIGHTS AVAILABLE ON REQUEST`,
  },
  'canvas-strip': {
    name: 'Stripe Canvas',
    description: 'Product: 100% cotton/polycotton black and white stripe waterproof canvas for tent, windbreak side walls. Yarn dyed cotton fabric is made to order and can be customized as per requirement of buyer. Biggest advantage of yarn dyed fabric is making your own design, pattern, chambray fabric in different thickness as per usage and requirement. Yarn dyed fabric can be made in different patterns like stripe. You can play with colours and choose different colours to make your own customized yarn dyed cotton fabric.',
    imageUrl: cc5Image,
    details: 'Width: 90 cm to 200 cm. Weight: 300 gsm to 1000 gsm. Use: Tent, Tarpaulin, Umbrella, Windbreak Walls. Category: Canvas. Tags: 100% cotton canvas, canvas, canvas bag, canvas drop cloth, canvas for tent, canvas sheet, canvas tents, cotton canvas, fabric, fire retardant canvas, poly cotton canvas, recycled canvas, stripe canvas, waterproof canvas.',
    specifications: `PRODUCT: 100% COTTON/POLYCOTTON BLACK AND WHITE STRIPE WATERPROOF CANVAS
USE: TENT, TARPAULIN, UMBRELLA, WINDBREAK WALLS
WIDTH: 90 CM TO 200 CM
WEIGHT: 300 GSM TO 1000 GSM
CATEGORY: CANVAS
CUSTOMIZATION: YARN DYED FABRIC MADE TO ORDER – DESIGN, PATTERN, CHAMBRAY, THICKNESS AS PER BUYER REQUIREMENT. CUSTOM COLOURS AND PATTERNS AVAILABLE`,
  },
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const product = id ? productDatabase[id] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-lime-500 text-white px-6 py-2 rounded-lg hover:bg-lime-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Check if product has accordion format (has accessories, packing, dimensions, or shipping fields)
  const hasAccordionFormat = !!(product.accessories || product.packing || product.dimensions || product.shipping);
  
  // Split description into paragraphs if it contains multiple sentences
  const descriptionParagraphs = product.description 
    ? product.description.split('. ').filter(p => p.trim())
    : [];

  // Parse specifications into separate categories
  const parseSpecifications = (specs: string) => {
    const lines = specs.split('\n').filter(line => line.trim());
    const specifications: { label: string; value: string }[] = [];
    let applications = '';
    let material = '';
    let currentSection = '';
    
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // Check if it's a section header (all caps, no colon, standalone)
      if (trimmed && !trimmed.includes(':') && trimmed === trimmed.toUpperCase() && trimmed.length > 3) {
        // Check if next line has a colon (indicating this is a section header)
        const nextLine = index + 1 < lines.length ? lines[index + 1].trim() : '';
        if (nextLine.includes(':')) {
          currentSection = trimmed;
          return;
        }
      }
      
      // Check for APPLICATIONS
      if (trimmed.toUpperCase().startsWith('APPLICATIONS:')) {
        applications = trimmed.substring('APPLICATIONS:'.length).trim();
        return;
      }
      
      // Check for MATERIAL
      if (trimmed.toUpperCase().startsWith('MATERIAL:')) {
        material = trimmed.substring('MATERIAL:'.length).trim();
        return;
      }
      
      if (trimmed.match(/^[A-F1]\s/)) {
        // Handle A-F and 1 specifications
        const match = trimmed.match(/^([A-F1])\s(.+)$/);
        if (match) {
          const label = currentSection ? `${currentSection} - ${match[1]}` : match[1];
          specifications.push({ label: label, value: match[2] });
        }
      } else if (trimmed.includes(':')) {
        // Handle key-value pairs, but exclude APPLICATIONS and MATERIAL
        const colonIndex = trimmed.indexOf(':');
        const key = trimmed.substring(0, colonIndex).trim();
        const value = trimmed.substring(colonIndex + 1).trim();
        
        if (key.toUpperCase() !== 'APPLICATIONS' && key.toUpperCase() !== 'MATERIAL') {
          // Reset section if we encounter a new main section
          if (key.includes('OPTION') && key.match(/OPTION\s+\d+$/)) {
            currentSection = '';
          }
          
          specifications.push({ label: key, value: value });
        }
      }
    });
    
    return { specifications, applications, material };
  };

  const { specifications: specificationsTable, applications, material } = parseSpecifications(product.specifications);

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimateIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-700 hover:text-lime-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </button>

        {/* Image and Product Details Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-square w-full">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
            
            {hasAccordionFormat ? (
              <>
                {/* Description Paragraphs */}
                <div className="space-y-4 mb-8">
                  {descriptionParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-sm text-gray-700 leading-relaxed lowercase">
                      {paragraph.trim()}.
                    </p>
                  ))}
                </div>

                {/* Key Features - Show different features based on product type */}
                {id && (id.startsWith('tents-')) ? (
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 border-2 border-gray-900 rounded-lg flex items-center justify-center mb-2">
                        <Droplets size={32} className="text-gray-900" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">Water Proof</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 border-2 border-gray-900 rounded-lg flex items-center justify-center mb-2">
                        <Sun size={32} className="text-gray-900" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">UV Proof</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 border-2 border-gray-900 rounded-lg flex items-center justify-center mb-2">
                        <Shield size={32} className="text-gray-900" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">Rot Proof</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 border-2 border-gray-900 rounded-lg flex items-center justify-center mb-2">
                        <Shield size={32} className="text-gray-900" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">Food Safe</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 border-2 border-gray-900 rounded-lg flex items-center justify-center mb-2">
                        <Droplets size={32} className="text-gray-900" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">Durable</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 border-2 border-gray-900 rounded-lg flex items-center justify-center mb-2">
                        <Sun size={32} className="text-gray-900" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">Customizable</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="w-24 h-1 bg-lime-500 mb-6" />
                <p className="text-sm text-gray-600 mb-6 lowercase">{product.description}</p>
                <div className="border-t pt-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h2>
                  <p className="text-sm text-gray-700 leading-relaxed lowercase">{product.details}</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Specifications - Accordion for products with accordion format, Table for others */}
        {hasAccordionFormat ? (
          <div className="bg-white rounded-lg p-8 shadow-lg">
            {/* Accordion Sections */}
            <div className="space-y-4">
              {/* SPECIFICATIONS */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection('specifications')}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lime-600 font-semibold uppercase">SPECIFICATIONS</span>
                  <span className="text-gray-900 text-xl font-bold">
                    {openSections.specifications ? '−' : '+'}
                  </span>
                </button>
                {openSections.specifications && (
                  <div className="px-4 pb-4">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <tbody>
                          {specificationsTable.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-900">{row.label}</td>
                              <td className="border border-gray-300 px-4 py-2 text-gray-700">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* ACCESSORIES */}
              {product.accessories && (
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection('accessories')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lime-600 font-semibold uppercase">ACCESSORIES</span>
                    <span className="text-gray-900 text-xl font-bold">
                      {openSections.accessories ? '−' : '+'}
                    </span>
                  </button>
                  {openSections.accessories && (
                    <div className="px-4 pb-4">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">{product.accessories}</pre>
                    </div>
                  )}
                </div>
              )}

              {/* PACKING */}
              {product.packing && (
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection('packing')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lime-600 font-semibold uppercase">PACKING</span>
                    <span className="text-gray-900 text-xl font-bold">
                      {openSections.packing ? '−' : '+'}
                    </span>
                  </button>
                  {openSections.packing && (
                    <div className="px-4 pb-4">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">{product.packing}</pre>
                    </div>
                  )}
                </div>
              )}

              {/* DIMENSIONS */}
              {product.dimensions && (
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection('dimensions')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lime-600 font-semibold uppercase">DIMENSIONS</span>
                    <span className="text-gray-900 text-xl font-bold">
                      {openSections.dimensions ? '−' : '+'}
                    </span>
                  </button>
                  {openSections.dimensions && (
                    <div className="px-4 pb-4">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">{product.dimensions}</pre>
                    </div>
                  )}
                </div>
              )}

              {/* PACKING / SHIPPING */}
              {product.shipping && (
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection('shipping')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lime-600 font-semibold uppercase">PACKING / SHIPPING</span>
                    <span className="text-gray-900 text-xl font-bold">
                      {openSections.shipping ? '−' : '+'}
                    </span>
                  </button>
                  {openSections.shipping && (
                    <div className="px-4 pb-4">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">{product.shipping}</pre>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Get More Information Button */}
            <div className="mt-8">
              <button
                onClick={() => navigate('/contact')}
                className="w-full bg-lime-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-600 transition-colors"
              >
                Get More Information
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="space-y-4">
              {/* SPECIFICATIONS */}
              {specificationsTable.length > 0 && (
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection('specifications')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lime-600 font-semibold uppercase text-xl">SPECIFICATIONS</span>
                    <span className="text-gray-900 text-xl font-bold">
                      {openSections.specifications ? '−' : '+'}
                    </span>
                  </button>
                  {openSections.specifications && (
                    <div className="px-4 pb-4">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-6 py-4 text-left font-bold text-gray-900">Specification</th>
                              <th className="border border-gray-300 px-6 py-4 text-left font-bold text-gray-900">Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {specificationsTable.map((row, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">{row.label}</td>
                                <td className="border border-gray-300 px-6 py-4 text-gray-700">{row.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* APPLICATIONS */}
              {applications && (
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection('applications')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lime-600 font-semibold uppercase text-xl">APPLICATIONS</span>
                    <span className="text-gray-900 text-xl font-bold">
                      {openSections.applications ? '−' : '+'}
                    </span>
                  </button>
                  {openSections.applications && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-700 leading-relaxed">{applications}</p>
                    </div>
                  )}
                </div>
              )}

              {/* MATERIAL */}
              {material && (
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection('material')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lime-600 font-semibold uppercase text-xl">MATERIAL</span>
                    <span className="text-gray-900 text-xl font-bold">
                      {openSections.material ? '−' : '+'}
                    </span>
                  </button>
                  {openSections.material && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-700 leading-relaxed">{material}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Get More Information Button */}
            <div className="mt-8">
              <button
                onClick={() => navigate('/contact')}
                className="w-full bg-lime-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-600 transition-colors"
              >
                Get More Information
              </button>
            </div>
          </div>
        )}
      </AnimateIn>
    </div>
  );
}
