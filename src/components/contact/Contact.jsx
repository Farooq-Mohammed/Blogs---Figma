import React from "react";

import './contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h3>Get in touch</h3>
      <p>Whether it is to discuss about a project or just want to chat with me, feel free to ping me!</p>
      <div className="contact-group">
        <p>I'm reachable @</p>
        <table>
          <tbody>

            <tr>
                <td><i className="fa-solid fa-envelope fa-lg"></i></td>
                <td>omar.farooq023@gmail.com</td>
            </tr>
            <tr>
                <td><i className="fa-brands fa-instagram fa-xl"></i></td>
                <td>omarXfarooq</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
