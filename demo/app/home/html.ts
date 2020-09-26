export const html = `<!doctype html>
<html>
  <head>
    <title>100 Tricks to Appear Smart in Meetings</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      @import url('https://fonts.loli.net/css?family=Lato:400,700,400italic,700italic&subset=latin');

      :root {
        --kn-font-size-h1: 48px;
        --kn-font-size-h2: 34px;
        --kn-font-size-h3: 24px;
        --kn-font-size-h4: 20px;
        --kn-font-size-h5: 16px;
        --kn-font-size-body: 14px;
        --kn-font-size-caption: 12px;
        --kn-info-title-font: rgb(25, 25, 34);
        --kn-info-author-font: rgb(25, 25, 34);
        --kn-info-statistics-font: rgb(134, 138, 157);
        --kn-clippings-chapter-font: rgb(25, 25, 34);
        --kn-clippings-highlight-font: rgb(25, 25, 34);
        --kn-clippings-highlight-border-left: rgb(206, 225, 252);
        --kn-clippings-note-font: rgb(134, 138, 157);
        --kn-clippings-note-border-left: rgb(216, 217, 216);
      }

      * {
        padding: 0;
        margin: 0;
        font-family: Lato,'Microsoft Yahei','Helvetica Neue',Arial,Helvetica,sans-serif !important;
      }

      body {
        font-family: Lato,'Microsoft Yahei','Helvetica Neue',Arial,Helvetica,sans-serif !important;
        -webkit-print-color-adjust: exact;
      }

      #book {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px 0;
      }

      #info {
        padding-bottom: 32px;
        margin-bottom: 24px;
        border-bottom: 1px solid rgb(233, 235, 240);
        display: flex;
      }

      .title-and-author {
        flex: 1 0 0;
      }

      #info .title {
        color: var(--kn-info-title-font);
        font-size: var(--kn-font-size-h3);
        font-weight: 500;
        margin-bottom: 16px;
        word-break: break-word;
      }

      #info .subtitle {
        color: var(--kn-info-title-font);
        font-size: var(--kn-font-size-h5);
        margin-bottom: 16px;
        word-break: break-word;
      }

      #info .author {
        color: var(--kn-info-author-font);
        font-size: var(--kn-font-size-h5);
        margin-bottom: 16px;
        word-break: break-word;
      }

      .cover-and-statistics {
        flex: 0 0 90px;
      }

      #info .cover {
        text-align: right;
      }

      #info .cover img {
        height: 91px;
        width: 68px;
        margin-bottom: 24px;
        border-radius: 4px;
      }

      #info .statistics {
        color: var(--kn-info-statistics-font);
        font-size: var(--kn-font-size-body);
        text-align: right;
      }

      #clippings .chapter {
        color: var(--kn-info-chapter-font);
        font-size: var(--kn-font-size-h4);
        margin-bottom: 24px;
        word-break: break-word;
      }

      #clippings .clipping {
        margin-bottom: 24px;
      }

      #clippings .highlight, #clippings .note {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 16px;
      }

      #clippings .highlight {
        color: var(--kn-info-highlight-font);
        font-size: var(--kn-font-size-body);
        border-left: 4px solid var(--kn-clippings-highlight-border-left);
        padding-left: 8px;
        margin: 8px 0;
      }

      #clippings .note {
        border-left: 4px solid var(--kn-clippings-note-border-left);
        padding-left: 8px;
        color: var(--kn-clippings-note-font);
        font-size: var(--kn-font-size-body);
        margin: 8px 0;
      }

      #clippings .content {
        flex: 1 0 0;
        margin-right: 24px;
        flex-wrap: wrap;
        word-wrap: break-word;
      }

      #clippings .vertical-separator {
        padding: 0 4px;
      }

       /* Markdown styles */
      #clippings .content h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child {
        margin-top: 0;
      }

      #clippings .content h1 {
        min-height: 1rem;
        font-size: 2rem;
      }

      #clippings .content h2 {
        font-size: 1.71428571rem;
      }

      #clippings .content h3 {
        font-size: 1.28571429rem;
      }

      #clippings .content h4 {
        font-size: 1.07142857rem;
      }

      #clippings .content h5 {
        font-size: 1rem;
      }

      #clippings .content h1, h2, h3, h4, h5 {
        font-family: Lato,'Microsoft Yahei','Helvetica Neue',Arial,Helvetica,sans-serif !important;
        line-height: 1.28571429em;
        margin: calc(2rem - .14285714em) 0 1rem;
        font-weight: 700;
        padding: 0;
      }

      #clippings .content ul, ol {
        margin-left: 16px !important;
      }

      #clippings .content img {
        max-width: 100% !important;
      }

      #clippings .meta {
        display: flex;
        flex: 0 0 auto;
        text-align: left;
        color: var(--kn-info-statistics-font);
        font-size: var(--kn-font-size-body);
        margin-top: 24px;
      }

      /* media query */
      @media only screen and (max-width: 640px) { /* mobile */
        .mobile {
          display: block;
        }

        .desktop {
          display: none;
        }

        #book {
          padding: 16px;
        }

        #info .cover img {
          margin-bottom: 16px;
        }

        #info .statistics {
          text-align: left;
        }

        #clippings .content {
          margin-right: 0;
        }

        #clippings .note {
          margin-left: 0;
        }

        #clippings .meta {
          flex: 1 0 100%;
          text-align: left;
          margin-top: 4px;
          display: flex;
        }
      }

      @media print, (min-width: 641px) {  /* desktop */
        .mobile {
          display: none;
        }

        .desktop {
          display: block;
        }
      }
    </style>
  </head>
  <body>
    <div id="book">
      <div id="info">
        <div class="title-and-author">
          <div class="title">100 Tricks to Appear Smart in Meetings</div>
          <h1>我是一个好人</h1>
          <h1>私はいい人</h1>
          <h1>я хороший человек</h1>
          <h1>Soy una buena persona</h1>
          <h1>我是一個好人</h1>
          <h1>ich bin ein guter Mensch</h1>
          <h1>أنا شخص جيد</h1>
          <h1>I'm a good person</h1>

          <div class="author">Sarah Cooper</div>
          <div class="statistics mobile" style="font-size: 14px;">
              3 标注
          </div>
        </div>
        <div class="cover-and-statistics">
          <div class="cover">
            <img src="http://img.knotesapp.com/fd2f0e9a-446e-4e3c-a06a-de2e0591c89f.jpg" alt="Book cover">
          </div>
          <div class="statistics desktop" style="font-size: 14px;">
              3 标注
          </div>
        </div>
      </div>
      <div id="clippings">
            <div class="clipping">
              <div class="meta" style="font-size: 14px;">
                  <div class="date">2019-07-27</div>
                  <span class="vertical-separator"> | </span>
                  <div class="location">#61</div>
              </div>
              <div class="highlight">
                <div class="content" style="font-size: 14px;">
                  <p>Do you attend meetings? Do you want to get ahead in your career? Do you enjoy answering pointless rhetorical questions? Did you buy this book for you or for someone else?</p>

                </div>
              </div>
                <div class="note">
                  <div class="content" style="font-size: 14px;">
                    <p>very nice</p>

                  </div>
                </div>
            </div>
            <div class="clipping">
              <div class="meta" style="font-size: 14px;">
                  <div class="date">2019-07-27</div>
                  <span class="vertical-separator"> | </span>
                  <div class="location">#136</div>
              </div>
              <div class="highlight">
                <div class="content" style="font-size: 14px;">
                  <p>At this point, you can slink back to your chair and go back to playing Candy Crush.</p>

                </div>
              </div>
                <div class="note">
                  <div class="content" style="font-size: 14px;">
                    <p>lol</p>

                  </div>
                </div>
            </div>
            <div class="clipping">
              <div class="meta" style="font-size: 14px;">
                  <div class="date">2019-07-27</div>
                  <span class="vertical-separator"> | </span>
                  <div class="location">#139</div>
              </div>
              <div class="highlight">
                <div class="content" style="font-size: 14px;">
                  <p>If someone says, “About 25 percent of all users click on this button,” jump in with, “So about one in four,” and make a note of it. Everyone will nod their heads in agreement, secretly impressed and envious of your quick math skills.</p>

                </div>
              </div>
            </div>
            <div class="clipping">
              <div class="meta" style="font-size: 14px;">
                  <div class="date">2019-11-07</div>
              </div>
              <div class="note">
                <div class="content" style="font-size: 14px;">
                  <p>waking lives in meetings, holding 11 million of them annually. But more than a third of those meetings are spent planning another meeting, while another sixth are spent asking someone to repeat what she just said because I wasn’t paying attention, while still another three-sixths really should have been an e-mail.</p>

                </div>
              </div>
            </div>
      </div>
    </div>
  </body>
</html>`