import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { RefreshTokenGuard } from "../common/guards";

@Controller("profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(RefreshTokenGuard)
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @UseGuards(RefreshTokenGuard)
  @Get()
  findAll() {
    return this.profileService.findAll();
  }
  
  @UseGuards(RefreshTokenGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.profileService.findOne(+id);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProfileDto: UpdateProfileDto
  ) {
    return this.profileService.update(+id, updateProfileDto);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.profileService.remove(+id);
  }
}
