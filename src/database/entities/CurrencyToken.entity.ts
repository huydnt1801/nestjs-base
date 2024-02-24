import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Base } from './Base.entity';
import { CurrencyConfig } from './CurrencyConfig.entity';
@Entity('currency_token')
export class CurrencyToken extends Base {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  public id: number;

  @Column({ name: 'token_name', type: 'varchar', nullable: true })
  public tokenName: string;

  @Column({ name: 'decimal', type: 'int', nullable: true })
  public decimal: number;

  @Column({ name: 'chain_id', type: 'varchar', nullable: true })
  public chainId: string;

  @Column({ name: 'contract_address', type: 'varchar', nullable: true })
  public contractAddress: string;

  @Column({ name: 'status', type: 'int', nullable: true })
  public status: number;

  @Column({ name: 'is_native_token', type: 'int', nullable: true })
  public isNativeToken: number;

  @Column({ name: 'currency', type: 'varchar', nullable: true })
  public currency: string;

  @Column({ name: 'icon', type: 'varchar', nullable: true })
  public icon: string;

  @ManyToOne(
    () => CurrencyConfig,
    (currencyConfig) => currencyConfig.currencyToken,
  )
  @JoinColumn({ name: 'currency_config_id' })
  public currencyConfig: CurrencyConfig;
}
