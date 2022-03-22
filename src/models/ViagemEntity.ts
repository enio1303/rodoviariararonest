import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Bilhete } from "./BilheteEntity";
import { Companhia } from "./CompanhiaEntity";
import { Onibus } from "./OnibusEntity";


@Entity()
export class Viagem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cidade_origem: string;

    @Column()
    cidade_destino: string;

    @Column({ type: 'timestamp', nullable: true })
    data_saida: Date;

    @Column({ type: 'timestamp', nullable: true })
    valor_viagem: number;

    @Column()
    assentos_disponiveis: number;

    @Column()
    ativo: boolean;

    @ManyToOne(() => Companhia, (companhia) => companhia.viagens)
    companhia: Companhia;

    @ManyToOne(() => Onibus, (onibus) => onibus.viagem)
    onibus: Onibus;
    
    @OneToMany(() => Bilhete, (bilhete) => bilhete.viagem)
    bilhetes: Bilhete[];
    
}
