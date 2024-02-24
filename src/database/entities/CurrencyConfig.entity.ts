import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './Base.entity';
import { CurrencyToken } from './CurrencyToken.entity';

@Entity('currency_config')
export class CurrencyConfig extends Base {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'network', type: 'varchar', nullable: false })
  public network: string;

  @Column({ name: 'chain_id', type: 'varchar', nullable: true })
  public chainId: string;

  @Column({ name: 'chain_name', type: 'varchar', nullable: true })
  public chainName: string;

  @Column({ name: 'token_address', type: 'json', nullable: true })
  public tokenAddress: object;

  @Column('int', { name: 'average_block_time', nullable: false })
  public averageBlockTime: number;

  @Column('int', { name: 'required_confirmations', nullable: false })
  public requiredConfirmations: number;

  @Column('int', { name: 'temp_required_confirmations', nullable: false })
  public tempRequiredConfirmations: number;

  @Column({ name: 'scan_api', type: 'varchar', length: 200, nullable: true })
  public scanApi: string;

  @Column({ name: 'rpc_endpoint', type: 'varchar', nullable: true })
  public rpcEndpoint: string;

  @Column({ name: 'explorer_endpoint', type: 'varchar', nullable: true })
  public explorerEndpoint: string;

  @OneToMany(
    () => CurrencyToken,
    (currencyToken) => currencyToken.currencyConfig,
  )
  public currencyToken: CurrencyToken[];
}
