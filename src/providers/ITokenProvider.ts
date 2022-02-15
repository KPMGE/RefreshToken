export interface ITokenProvider {
  generate(user_id: string): string;
}
