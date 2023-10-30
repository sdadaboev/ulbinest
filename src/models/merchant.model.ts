// // src/models/merchant.model.ts
// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
// import { Region } from './region.model'; // Импортируйте модель Region и District при необходимости
// import { District } from './district.model';

// @Entity('merchants')
// export class Merchant {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   state: string = 'NEW';

//   @Column()
//   tin: string;

//   @Column()
//   pinfl: string;

//   @Column()
//   name: string;

//   @Column()
//   address: string;

//   @Column()
//   phone: string;

//   @Column()
//   region_code: number;

//   @Column()
//   district_code: number;

//   @ManyToOne(() => Region)
//   @JoinColumn({ name: 'region_code' })
//   region: Region;

//   @ManyToOne(() => District)
//   @JoinColumn([{ name: 'region_code', referencedColumnName: 'ns10Code' }, { name: 'district_code', referencedColumnName: 'code' }])
//   district: District;

//   @Column()
//   rusInternalId: string;

//   // Другие атрибуты и методы, если есть

//   constructor(taxApplication: TaxApplication) {
//     this.tin = taxApplication.tin;
//     this.pinfl = taxApplication.pinfl;
//     this.address = taxApplication.address;
//     this.region_code = taxApplication.officeRegionCode;
//     this.district_code = taxApplication.officeDistrictCode;
//     this.region = taxApplication.officeRegion;
//     this.district = taxApplication.officeDistrict;
//     this.phone = taxApplication.phone;
//     this.name = taxApplication.name;
//   }

//   getRusInternalId(): string | null {
//     return this.rusInternalId === '---' ? null : this.rusInternalId;
//   }

//   setRusInternalId(rusInternalId: string | null): void {
//     if (rusInternalId && rusInternalId !== '---') {
//       this.rusInternalId = rusInternalId;
//     }
//   }
// }
