import { Module } from '@nestjs/common';
import { CurrencyConfig } from '../../database/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockchainService } from './blockchain.service';
import { CurrencyRegistryService } from './currency.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([CurrencyConfig]), HttpModule],
  exports: [TypeOrmModule, BlockchainService, CurrencyRegistryService],
  providers: [BlockchainService, CurrencyRegistryService],
})
export class CommonModule {}
