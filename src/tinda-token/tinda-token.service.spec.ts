import { Test, TestingModule } from '@nestjs/testing';
import { TindaTokenService } from './tinda-token.service';

describe('TindaTokenService', () => {
  let service: TindaTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TindaTokenService],
    }).compile();

    service = module.get<TindaTokenService>(TindaTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
