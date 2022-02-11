import React from "react";

export function Home() {
  return (
    <div itemScope itemType="https://schema.org/VideoObject">
      <meta
        itemProp="uploadDate"
        content="Sun Oct 24 2021 13:24:49 GMT-0300 (Horário Padrão de Brasília)"
      />
      <meta itemProp="name" content="[Mission  Elixir] Aula 01 – Liftoff" />
      <meta itemProp="duration" content="P0Y0M0DT1H18M23S" />
      <meta
        itemProp="thumbnailUrl"
        content="https://content.jwplatform.com/thumbs/BfUwyoGX-960.jpg"
      />
      <meta
        itemProp="contentUrl"
        content="https://content.jwplatform.com/videos/BfUwyoGX-ajYdByGU.mp4"
      />
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          paddingBottom: "56.25%",
        }}
      >
        <iframe
          src="https://cdn.jwplayer.com/players/BfUwyoGX-m7fUO1eV.html"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="auto"
          title="[Mission  Elixir] Aula 01 – Liftoff"
          style={{ position: "absolute" }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
