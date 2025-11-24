'use server';

/**
 * @fileOverview This file defines a Genkit flow that adaptively optimizes content based on user context,
 * such as network speed and accessibility preferences.
 *
 * - optimizeContent - A function that handles the content optimization process.
 * - OptimizeContentInput - The input type for the optimizeContent function.
 * - OptimizeContentOutput - The return type for the optimizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeContentInputSchema = z.object({
  siteData: z.object({
    title: z.string().optional(),
    shortDescription: z.string().optional(),
    longDescription: z.string().optional(),
    thumbnailUrl: z.string().optional(),
    coverImageUrl: z.string().optional(),
    lowPolyModelUrl: z.string().optional(),
    highPolyModelUrl: z.string().optional(),
    fallback360Url: z.string().optional(),
    audioNarrationUrl: z.string().optional(),
  }).optional(),
  artifactData: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    imageUrl: z.string().optional(),
    modelFileUrl: z.string().optional(),
    fallbackImageUrl: z.string().optional(),
    audioNarrationUrl: z.string().optional(),
  }).optional(),
  userPreferences: z.object({
    lowBandwidth: z.boolean().optional(),
    accessibilityOn: z.boolean().optional(),
    audioOn: z.boolean().optional(),
  }).optional(),
});

export type OptimizeContentInput = z.infer<typeof OptimizeContentInputSchema>;

const OptimizeContentOutputSchema = z.object({
  optimizedSiteData: z.object({
    title: z.string().optional(),
    shortDescription: z.string().optional(),
    longDescription: z.string().optional(),
    thumbnailUrl: z.string().optional(),
    coverImageUrl: z.string().optional(),
    modelUrl: z.string().optional(),
    fallbackUrl: z.string().optional(),
    audioNarrationUrl: z.string().optional().nullable(),
  }).optional(),
  optimizedArtifactData: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    imageUrl: z.string().optional(),
    modelUrl: z.string().optional(),
    fallbackImageUrl: z.string().optional(),
    audioNarrationUrl: z.string().optional().nullable(),
  }).optional(),
});

export type OptimizeContentOutput = z.infer<typeof OptimizeContentOutputSchema>;

export async function optimizeContent(input: OptimizeContentInput): Promise<OptimizeContentOutput> {
  return optimizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeContentPrompt',
  input: {schema: OptimizeContentInputSchema},
  output: {schema: OptimizeContentOutputSchema},
  prompt: `You are an expert in optimizing digital content for users with varying network conditions and accessibility needs.

  Given the following site data:
  {{#if siteData}}
  Site Title: {{siteData.title}}
  Site Short Description: {{siteData.shortDescription}}
  Site Long Description: {{siteData.longDescription}}
  Site Thumbnail URL: {{siteData.thumbnailUrl}}
  Site Cover Image URL: {{siteData.coverImageUrl}}
  Site High Poly Model URL: {{siteData.highPolyModelUrl}}
  Site Low Poly Model URL: {{siteData.lowPolyModelUrl}}
  Site Fallback 360 URL: {{siteData.fallback360Url}}
  Site Audio Narration URL: {{siteData.audioNarrationUrl}}
  {{else}}
  No site data provided.
  {{/if}}

  Given the following artifact data:
  {{#if artifactData}}
  Artifact Title: {{artifactData.title}}
  Artifact Description: {{artifactData.description}}
  Artifact Image URL: {{artifactData.imageUrl}}
  Artifact Model File URL: {{artifactData.modelFileUrl}}
  Artifact Fallback Image URL: {{artifactData.fallbackImageUrl}}
  Artifact Audio Narration URL: {{artifactData.audioNarrationUrl}}
  {{else}}
  No artifact data provided.
  {{/if}}

  Given the following user preferences:
  {{#if userPreferences}}
  Low Bandwidth Mode: {{userPreferences.lowBandwidth}}
  Accessibility Mode: {{userPreferences.accessibilityOn}}
  Audio Narration Enabled: {{userPreferences.audioOn}}
  {{else}}
  No user preferences provided.
  {{/if}}

  Based on the provided data and preferences, optimize the content accordingly.
  - If low bandwidth mode is enabled, prioritize low-poly models and low-resolution images.
  - If accessibility mode is enabled, ensure audio narration is available. If audioOn preference is false, set audioNarrationUrl to null.

  Return the optimized site data and artifact data.
  `,
});

const optimizeContentFlow = ai.defineFlow(
  {
    name: 'optimizeContentFlow',
    inputSchema: OptimizeContentInputSchema,
    outputSchema: OptimizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    // console.log("optimizeContentFlow result", output)
    const optimizedOutput = output ? {
      optimizedSiteData: {
        ...output.optimizedSiteData,
        modelUrl: input.userPreferences?.lowBandwidth ? input.siteData?.lowPolyModelUrl : input.siteData?.highPolyModelUrl,
        fallbackUrl: input.siteData?.fallback360Url,
        audioNarrationUrl: (input.userPreferences?.accessibilityOn && input.userPreferences?.audioOn) ? input.siteData?.audioNarrationUrl : null,
      },
      optimizedArtifactData: {
        ...output.optimizedArtifactData,
        modelUrl: input.userPreferences?.lowBandwidth ? null : input.artifactData?.modelFileUrl, //No low poly model defined for artifacts
        fallbackImageUrl: input.artifactData?.fallbackImageUrl,
        audioNarrationUrl: (input.userPreferences?.accessibilityOn && input.userPreferences?.audioOn) ? input.artifactData?.audioNarrationUrl : null,
      },
    } : {};
    return optimizedOutput as OptimizeContentOutput;
  }
);
