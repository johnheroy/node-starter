import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('hellos')
export class Hello {
  
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public name: string

  @CreateDateColumn({ name: 'created_at'})
  public createdAt: Date
}
