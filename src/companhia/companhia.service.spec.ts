import { Test, TestingModule } from '@nestjs/testing';
import { CompanhiaService } from './companhia.service';

describe('CompanhiaService', () => {
  let service: CompanhiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanhiaService],
    }).compile();

    service = module.get<CompanhiaService>(CompanhiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
