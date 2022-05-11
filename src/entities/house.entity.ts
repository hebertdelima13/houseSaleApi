import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'house' })
export class House {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'title', type: 'varchar', length: 100 })
    title?: string;

    @Column({ name: 'desc_short', type: 'varchar', length: 100 })
    desc_short?: string;

    @Column({ name: 'desc_full', type: 'text' })
    desc_full?: string;

    @Column({ name: 'city', type: 'varchar', length: 100 })
    city?: string;

    @Column({ name: 'price', type: 'numeric' })
    price?: number;

    @Column({ name: 'img', type: 'text' })
    img?: string;

    @Column({ name: 'inclusion_date', type: 'date' })
    inclusion_date?: Date | string;
}