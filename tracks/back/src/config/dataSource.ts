import {DataSource, DataSourceOptions} from "typeorm";
import {AlbumEntities} from "../entities/album.entities";
import {ArtistEntities} from "../entities/artist.entities";
import {TrackEntities} from "../entities/track.entities";
import {User} from "../entities/user.entity";
import {TrackHistoryEntity} from "../entities/track.history.entity";
import {SeederOptions} from "typeorm-extension";
import {UserFactory} from "../database/factory/user.factory";
import {AlbumFactory} from "../database/factory/album.factory";
import MainSeeder from "../database/seeds/main.seeder";
import {ArtistFactory} from "../database/factory/artist.factory";
import {TrackFactory} from "../database/factory/track.factory";
import {TrackHistoryFactory} from "../database/factory/track.history.factory";
import UserSeeder from "../database/seeds/userSeeder";

const options: DataSourceOptions & SeederOptions = {
    type:'mysql',
    host:'localhost',
    username:'root',
    database:'music',
    password:'ьнтфьушывшфы12',
    port:3306,
    synchronize:true,
    logging:true,
    entities:[AlbumEntities,ArtistEntities,TrackEntities,User,TrackHistoryEntity],
    factories:[UserFactory,AlbumFactory,ArtistFactory,TrackFactory,TrackHistoryFactory],
    seeds:[MainSeeder,UserSeeder],
}
export const appDataSource = new DataSource(options)