/**
 * Groq AI Integration Helper
 * Handles long-form content generation for GCC Insights.
 */

export interface GroqResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export async function generateGCCInsight(country: string, topic: string, lang: 'en' | 'ar'): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured in environment variables.");
  }

  const prompt = lang === 'en' 
    ? `Write a detailed, premium, and authoritative article about ${country} focusing on ${topic}. 
       The article should be at least 1200 words long. 
       Use a sophisticated, journalistic tone suitable for a high-end regional reference platform.
       Include subheadings, bullet points, and a deep analysis. 
       Avoid generic clichés. Focus on current trends, economic vision (like Vision 2030 if applicable), and cultural heritage.
       Format the output in clean Markdown.`
    : `اكتب مقالاً مفصلاً ومتميزاً وموثوقاً عن ${country} مع التركيز على ${topic}.
       يجب أن لا يقل طول المقال عن 1200 كلمة.
       استخدم نبرة صحفية راقية تليق بمنصة مرجعية إقليمية متميزة.
       قم بتضمين عناوين فرعية، ونقاط، وتحليل عميق.
       تجنب الكليشيهات العامة. ركز على الاتجاهات الحالية، والرؤية الاقتصادية (مثل رؤية 2030)، والتراث الثقافي.
       نسق المخرجات بصيغة Markdown نظيفة.`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are a senior regional analyst and journalist specializing in GCC affairs. Your writing is elegant, factual, and deeply insightful."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4096, // High token count for long-form content
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Groq API Error: ${error.error?.message || response.statusText}`);
    }

    const data: GroqResponse = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating insight:", error);
    throw error;
  }
}
