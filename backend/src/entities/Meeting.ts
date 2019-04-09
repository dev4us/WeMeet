import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne
} from "typeorm";
import User from "./User";
import Day from "./Day";

@Entity()
class Meeting extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(type => User, user => user.meetings)
  @JoinTable()
  participants: User[];

  @ManyToOne(type => User, user => user.manages)
  admin: User;

  @OneToMany(type => Day, day => day.asMeeting)
  meetingDays: Day[];

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}

export default Meeting;
