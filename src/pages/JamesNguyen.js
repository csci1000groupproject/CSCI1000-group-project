export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hi, I'm James! </h1>
          </div>
          <img
            className='pic'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqe2-4ylSVnXBkEZWitQ6f3a4oTk0d8mfYQ&s'
            alt='bee'
          />

          <p className='description'>
            Hello, I'm James Nguyen. I'm a freshman <span style={{color: "#9568ce"}}>computer science major,</span> <span style={{color: "#61efae"}}>linguistics minor,</span> and 
            computational biology enthusiast. This is my website for CSCI1000. I'm a research assistant for the <span style={{color: "#c4ca6d"}}>Peleg Lab,</span> working 
            on segmenting 3d x-rays of <span style={{color: "#c4ca6d"}}>honeybee swarms.</span> 
          </p>

          <a className='button' href='/'>
            <p>Home Page</p>
          </a>
        </main>

        <style jsx>{`

          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
            background-color: lavender;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 1.6rem;
          }

          .title:hover{
            background-color: pink;
            transition: 0.5s;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            width: 600px;
          }

          .pic {
            height: 300px;
            width: 300px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid purple;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #c4ca6d;
            border-width: 2px;
            background-color: #f9ff9b;
            transition: 0.5s;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}
