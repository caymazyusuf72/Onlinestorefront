'use server';
/**
 * @fileOverview A product chatbot AI agent.
 *
 * - productChatbot - A function that handles product-related questions.
 * - ProductChatbotInput - The input type for the productChatbot function.
 * - ProductChatbotOutput - The return type for the productChatbot function.
 */

import { ai } from '@/ai/genkit';
import { getProductById } from '@/lib/mock-data';
import { z } from 'zod';

const ProductChatbotInputSchema = z.object({
  productId: z.number().describe('The ID of the product being asked about.'),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })
    )
    .describe('The conversation history.'),
});
export type ProductChatbotInput = z.infer<typeof ProductChatbotInputSchema>;

const ProductChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response to the user query.'),
});
export type ProductChatbotOutput = z.infer<typeof ProductChatbotOutputSchema>;

export async function productChatbot(
  input: ProductChatbotInput
): Promise<ProductChatbotOutput> {
  return productChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productChatbotPrompt',
  input: { schema: ProductChatbotInputSchema },
  output: { schema: ProductChatbotOutputSchema },
  prompt: `You are a helpful and friendly AI assistant for an e-commerce store. 
Your goal is to answer customer questions about a specific product.

You will be provided with the product information as context. Use this information to answer the user's questions. 
If the user asks a question you cannot answer from the provided context, politely say that you don't have that information.
Keep your answers concise and helpful.

Product Information:
- Name: {{{product.name}}}
- Description: {{{product.description}}}
- Price: {{{product.price}}}
- Stock: {{{product.stock}}}
- Category: {{{product.category}}}
- Brand: {{{product.brand}}}
{{#if product.reviews.length}}
- Reviews:
{{#each product.reviews}}
  - {{author}} ({{rating}}/5): "{{comment}}"
{{/each}}
{{/if}}

Conversation History:
{{#each history}}
- {{role}}: {{content}}
{{/each}}
`,
});

const productChatbotFlow = ai.defineFlow(
  {
    name: 'productChatbotFlow',
    inputSchema: ProductChatbotInputSchema,
    outputSchema: ProductChatbotOutputSchema,
  },
  async (input) => {
    const product = getProductById(input.productId);
    if (!product) {
      return { response: 'I am sorry, I cannot find that product.' };
    }

    const llmResponse = await prompt(input, {
      templateData: { product },
    });
    
    return llmResponse.output!;
  }
);
