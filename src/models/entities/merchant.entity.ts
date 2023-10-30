import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('merchants')
export class MerchantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tin: string;

  @Column()
  pinfl: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  region_code: number;

  @Column()
  district_code: number;

  @ManyToOne(type => RegionEntity)
  @JoinColumn({ name: 'region_code' })
  region: RegionEntity;

  @ManyToOne(type => DistrictEntity)
  @JoinColumn([
    { name: 'region_code', referencedColumnName: 'ns10Code' },
    { name: 'district_code', referencedColumnName: 'code' },
  ])
  district: DistrictEntity;

  @Column()
  rusInternalId: string;

  // Другие поля и отношения, если необходимо
}
