import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String)
  id!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => Float)
  price!: number;

  @Field()
  image!: string;

  @Field()
  stripePriceId!: string;

  @Field(() => Boolean)
  isFeatured!: boolean;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
