const pages = {
  'feedback': {
    title: 'Feedback Overview',
    content: `
    <h7>What to expect from the feedback?</h7>
    <p class="font-weight-light text-secondary">Simply copy your prompt and paste it to chatbot like ChatGPT for feedback. You can expect to receive insights about:</p>

    <ul class="font-weight-light text-secondary">
        <li>Your Strengths & Weaknesses: Areas where you are performing well or need improvement.</li>
        <li>Errors: Specific errors in your input.</li>
        <li>Content and Coherence: How well your content is structured and how coherent your arguments are.</li>
        <li>Suggestions for Enhancement: Suggestions on how you can improve your performance.</li>
    </ul>
    `
  },

  'about': {
    title: 'About',
    content: `
      <p class="font-weight-light text-secondary">VocalPencil is a platform aimed at aiding preparation for English proficiency tests such as CELPIP, IELTS, and TOEFL.</p>
  
      <p class="font-weight-light text-secondary">By harnessing the power of AI technology, VocalPencil generate prompts for personalized feedback and suggestions, democratizing access to high-quality test preparation.</p>
  
      <p class="font-weight-light text-secondary">Constantly evolving based on user feedback and advancements in language learning technology, VocalPencil is dedicated to empowering your success in language proficiency tests.</p>
      <p class="font-weight-light text-secondary">© Copyright 2023 VocalPencil.<br>Distributed under the terms of the AGPLv3 License</p>`
    },
  'help': {
    title: 'Help/FAQ',
    content: `
  
      <h7>How do I use VocalPencil for improving my English skills?</h7>
      <p class="font-weight-light text-secondary">On both the Speaking and Writing pages, record your speech or type your text, Click 'Copy Prompt for Feedback' and select the type of English proficiency test (CELPIP, IELTS, or TOEFL), then paste it to your chatbot such as ChatGPT to receive your personalized feedback.</p>
  
      <h7>Can I use the prompts for grading my speaking or writing?</h7>
  <p class="font-weight-light text-secondary">VocalPencil uses established English proficiency test rubrics to provide feedback on your spoken or written responses. However, the accuracy of the results may vary and may not always be consistent, even for the same content. Therefore, we recommend using the feedback provided as a tool for practice and improvement rather than as a precise grading system. We strive to guide users towards improvement, not mislead with potentially inaccurate scores.</p>
  
  
      <h7>How accurate is the feedback I receive from the chatbot?</h7>
  <p class="font-weight-light text-secondary">
  The feedback provided by the chatbot are based on the rubrics from the official English proficiency test websites. Please note that the accuracy and quality of the feedback also greatly depends on the chatbot you are using for evaluation. VocalPencil merely provides a platform for you to generate and format your inputs but does not participate in the analysis or evaluation of your content. These results should be used for learning purposes and as a tool for improvement rather than as a definitive prediction of actual exam scores.
  </p>
  
      <h7>I'm having trouble copying my text, what should I do?</h7>
      <p class="font-weight-light text-secondary">If you're unable to copy the text using the provided button, you can manually select the text and use the copy function of your device or browser.</p>
  
      <h7>Is my speech or writing content stored anywhere?</h7>
      <p class="font-weight-light text-secondary">No, VocalPencil does not keep any persistent records of your speech or writing content. All data is temporarily held for the duration of your session to enable the provision of feedback and is deleted immediately afterward.</p>
  
      <h7>I need more help, how do I contact support?</h7>
      <p class="font-weight-light text-secondary">If you have any further questions or would like to suggest any new functions, you can reach us through our contact page.</p>
  `},
  'legal': {
    title: 'Legal',
    content: `<h7>Disclaimer:</h7> <p class="font-weight-light text-secondary">The Service is provided "as is" without warranty of any kind. Your use of the Service is at your own risk.</p>
  
  <h7>Limitation of Liability:</h7> <p class="font-weight-light text-secondary">VocalPencil will not be liable for any damages or loss that may occur from the use of the Service.</p>
  
  <h7>License - GNU Affero General Public License v3.0</h7>
  
  <p class="font-weight-light text-secondary">VocalPencil's source code is licensed under the terms of the GNU Affero General Public License v3.0 ("AGPLv3").
  
  This means that you are free to:
  <ul class="font-weight-light text-secondary">
  <li>Use: You can use the Service for any legal purpose.</li>
  <li>Study: You can study how the Service works and make improvements.</li>
  <li>Redistribute: You can distribute copies of the Service to others.</li>
  <li>Modify: You can make modifications to the Service and distribute those.</li>
  </ul>
  
  <p class="font-weight-light text-secondary">However, there are certain conditions:</p>
  <ul class="font-weight-light text-secondary">
  <li>If you distribute or modify the Service, you must also distribute the source code under the same AGPLv3 license.</li>
  <li>If you run a modified version of the Service on a server and let others use it, you must also offer them access to the source code.</li>
  </ul>
  
  <p class="font-weight-light text-secondary">The full text of the AGPLv3 can be found at <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank">AGPLv3 Full Text</a>.</p>
  
  <h7>Privacy Policy:</h7> <p class="font-weight-light text-secondary">VocalPencil does not store any user data. However, for the purpose of traffic analysis, we use a privacy-focused, open-source analytics tool that does not share your data with any third parties.</p>`
  },
  'contact': {
    title: 'Contact',
    content: `<h7>We'd Love to Hear From You</h7><br><br>
  
      <p class="font-weight-light text-secondary">Whether you have a question about our service, need assistance, or you have suggestions for improvements, new features, or any other feedback, we are here to listen and respond.</p>
  
      <p class="font-weight-light text-secondary">Please email us at <a href="mailto:vocalpencil&#64;protonmail&#46;com">vocalpencil&#64;protonmail&#46;com</a>. We endeavor to respond to all inquiries as quickly as possible.</p>`
  }
};

$(function () {
  $('#aboutLink, #helpLink, #legalLink, #contactLink, #help-feedback').click(function (event) {
      event.preventDefault();
      let pageKey = this.id;

      if (this.id === 'help-feedback') {
          pageKey = 'feedback';
      } else {
          pageKey = pageKey.replace('Link', '');
      }

      const pageData = pages[pageKey];

      $('#footerModalLabel').text(pageData.title);
      $('#footerModal .modal-body').html(pageData.content);

      var myModal = new bootstrap.Modal(document.getElementById('footerModal'));
      myModal.show();
  });
});

