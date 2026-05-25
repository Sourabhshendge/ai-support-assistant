import { useState } from "react";

function SourceCard({
  source,
  index
}) {

  const [expanded, setExpanded] =
    useState(false);

  return (

    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-5
    ">

      <div className="
        flex
        justify-between
        items-center
        mb-4
      ">

        <h3 className="
          text-white
          font-semibold
        ">
          Source #{index + 1}
        </h3>

        <span className="
          text-green-400
          text-sm
        ">
          Similarity:
          {" "}
          {source.score.toFixed(2)}
        </span>

      </div>

      <p className="
        text-slate-300
        leading-7
      ">

        {
          expanded
            ? source.chunkText
            : source.chunkText.slice(0, 250)
        }

        {
          source.chunkText.length > 250 &&
          !expanded &&
          "..."
        }

      </p>

      <button
        onClick={() =>
          setExpanded(!expanded)
        }
        className="
          mt-4
          text-blue-400
          hover:text-blue-300
          text-sm
        "
      >
        {
          expanded
            ? "Show Less"
            : "Show More"
        }
      </button>

    </div>
  );
}

export default SourceCard;