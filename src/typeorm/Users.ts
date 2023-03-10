import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User{

    @PrimaryGeneratedColumn({
        type:'bigint'
    })
    id:number

    @Column()
    username:string
}
// export {User}
// const entities=[User]
// export default entities