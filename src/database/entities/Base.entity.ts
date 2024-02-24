import { nowInMillis } from '../../shared/Utils';
import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';

export class Base {
  @Column({
    name: 'created_at',
    type: 'bigint',
    nullable: true,
  })
  public createdAt: number;

  @Column({
    name: 'updated_at',
    type: 'bigint',
    nullable: true,
  })
  public updatedAt: number;

  @BeforeInsert()
  public updateCreateDates() {
    this.createdAt = nowInMillis();
    this.updatedAt = nowInMillis();
  }

  @BeforeUpdate()
  public updateUpdateDates() {
    this.updatedAt = nowInMillis();
  }
}
