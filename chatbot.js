function sendtoModel(){
    async function query(data) {
      const response = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          headers: {
            Authorization: `Bearer ${HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    }

    query({
      messages: [
        {
          role: "user",
          content: "how to make scrambled eggs?",
        },
      ],
      model: "meta-llama/Llama-3.1-70B-Instruct:fireworks-ai",
    }).then((response) => {
      console.log(JSON.stringify(response));
    });
}