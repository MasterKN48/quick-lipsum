import { h } from "preact";
import { useState } from "preact/hooks";
const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinut aliquam augue. Proin sit amet interdum ante, vel volutpat mi.Suspendisse sit amet egestas nisl. Nulla aliquet neque dolor,eget feugiat ante ultricies quis. Nulla efficitur tempus magnaac varius. Nulla facilisi. Praesent id pulvinar nisi. Duis quis massa a erat dapibus volutpat vel in quam. Vivamus commodo nunc non massa fringilla, porta posuere urna lobortis. Quisque lacinia vitae justo sit amet scelerisque. Quisque vitae purus tortor. Nulla facilisi. Aenean hendrerit tortor dapibus, auctor metus ut, elementum mi. Aliquam feugiat condimentum vestibulum.Quisque sit amet risus vel lorem vehicula rutrum. Nunc fringilla, diam et volutpat facilisis, odio diam dignissim leo,vitae venenatis augue magna ac tellus. Quisque vel purusmaximus, egestas est vel, egestas diam. In vitae bibendum tortor, nec lacinia leo. Aliquam elit lectus, vehicula eget est sed, porta porttitor sem. Sed sit amet felis dolor. Pellentesque convallis leo vel maximus blandit. Proin convallis aliquam velit. Pellentesque mollis ultricies convallis. Nunc quis sapien id est varius efficitur et vitae dolor. Morbi viverra auctor nisl, vel commodo odio malesuada ut. Nunc eget elit nisl. Suspendisse faucibus odio ante, vel fermentum magna congue eu. Suspendisse ac erat sed ex aliquet dapibus ut pellentesque nunc.";
const Home = () => {
  const [paragraph, setParagraph] = useState(str);
  const [count, setCount] = useState(1);
  const [msg, setMsg] = useState(false);
  const [tag, setTag] = useState({ type: "p", status: false });
  useState(() => {
    window.onload = function () {
      copyToClip();
    };
  }, [paragraph]);
  const copyToClip = () => {
    navigator.permissions
      .query({
        name: "clipboard-write",
      })
      .then((permissionStatus) => {
        // Will be 'granted', 'denied' or 'prompt':
        //console.log(permissionStatus.state);
        let data = "";
        if (tag.type === "p" && tag.status === true) {
          let temp = "\n<p> " + str + " </p>\n";
          data = temp.repeat(count);
        } else {
          data = ("\n" + str + "\n").repeat(count);
        }
        if (permissionStatus.state === "granted") {
          //console.log(data);
          navigator.clipboard
            .writeText(data)
            .then(() => {
              // Success!
              setParagraph(data);
              setMsg("Copied to clipboard");
            })
            .catch((err) => {
              setMsg(
                "Permission not granted! try clicking on textarea to copy"
              );
            });
        } else {
          setMsg("Permission not granted! try clicking on textarea to copy");
        }
      });
  };
  const submit = (e) => {
    e.preventDefault();
    setMsg("");
    copyToClip();
  };
  return (
    <div class="container margin">
      <h1>Quick-Lipsum</h1>
      <div class="row">
        <div class="column">
          <form onSubmit={submit} class="pure-form">
            <label htmlFor="para">Paragraph </label>
            <input
              type="number"
              name="para"
              min="1"
              max="1000"
              id="para"
              spellcheck="false"
              onChange={(e) => setCount(e.target.value)}
              value={count}
              placeholder="Enter Number of paragraph"
            />
            <br />
            <input
              type="checkbox"
              onChange={(e) => {
                setTag({ type: e.target.value, status: true });
              }}
              value="p"
              name="tag"
              id="tag"
            ></input>{" "}
            Include Paragraph Tag
            <br />
            <button class="button">Generate</button>
          </form>
          {msg.length > 0 ? (
            <blockquote>
              <p>
                <em>{msg}</em>
              </p>
            </blockquote>
          ) : null}
        </div>
        <div class="column">
          <textarea
            id="paragraph"
            name="paragraph"
            value={paragraph}
            onClick={(e) => {
              e.target.focus();
              e.target.select();
              let msg = document.execCommand("copy");
              setMsg(msg ? "Copied to clipboard" : "Something went wrong");
            }}
            readOnly
            placeholder="Lipsum Lorem Text"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
