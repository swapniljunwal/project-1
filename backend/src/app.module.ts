import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUri = process.env.MONGO_URI;

@Module({
  imports: [
    ...(mongoUri
      ? [
          MongooseModule.forRoot(mongoUri, {
            retryAttempts: 3,
          }),
        ]
      : []),
  ],
})
export class AppModule {
  constructor() {
    if (!mongoUri) {
      console.log("⚠️ MongoDB not configured. Skipping DB connection...");
    } else {
      console.log("✅ MongoDB connected");
    }
  }
}