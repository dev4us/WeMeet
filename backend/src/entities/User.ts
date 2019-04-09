import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany
} from "typeorm";

import Meeting from "./Meeting";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  userEmail: string;

  @Column({ nullable: false })
  userName: string;

  @Column({ nullable: true })
  profileImage: string;

  @ManyToMany(type => Meeting, meeting => meeting.participants)
  @JoinTable()
  meetings: Meeting[];

  @OneToMany(type => Meeting, meeting => meeting.admin)
  manages: Meeting[];

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}

export default User;
