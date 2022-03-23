import { Test, TestingModule } from '@nestjs/testing';
import { CompanhiaController } from './companhia.controller';
import { CompanhiaService } from './companhia.service';

describe('CompanhiaController', () => {
  let controller: CompanhiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanhiaController],
      providers: [CompanhiaService],
    }).compile();

    controller = module.get<CompanhiaController>(CompanhiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
