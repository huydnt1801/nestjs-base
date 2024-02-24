import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Base } from './Base.entity';

@Entity('user')
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  order: number;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ unique: true })
  twitterId: string;

  @Column({ unique: true, nullable: true })
  code: string;

  @Column({ nullable: true, default: false })
  isVerified: boolean;

  @Column({ nullable: true, select: false })
  referredById: number;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'referredById' })
  referredBy: User;

  @Column({
    type: 'decimal',
    precision: 36,
    scale: 18,
    default: 0,
  })
  earningUnclaimed: number;

  @Column({
    type: 'bigint',
    default: 0,
  })
  lastCalcEarnedAt: number;

  @Column({ default: false })
  isClaimedChest: boolean;
}
