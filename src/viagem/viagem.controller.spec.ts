import { Test, TestingModule } from '@nestjs/testing';
import { ViagemController } from './viagem.controller';
import { ViagemService } from './viagem.service';

describe('ViagemController', () => {
  let controller: ViagemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViagemController],
      providers: [ViagemService],
    }).compile();

    controller = module.get<ViagemController>(ViagemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
