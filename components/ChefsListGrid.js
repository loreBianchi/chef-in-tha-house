import React from 'react'
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

function ChefsListGrid(props) {
  const { data, error } = useSWR('/api/chefs', fetcher);
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const chefs = data?.chefs;

  let message;
  if (!data) message = 'Loading...';
  if (error) message = 'Failed to fetch the quote.';
  if (data && !error) message = null;

  return (
    <div className="chefs-list-grid">
      {message ? message : chefs && chefs.map(c => (
        <div key={c?.businessName} className="chefs-list-box">
          <h5>{c?.businessName}</h5>
          <table>
            <tbody>
              <tr>
                <td><b>STATE</b></td>
                <td>{c?.businessState}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <style jsx>{`
        table {
          font-size: 15px;
        }
      `}</style>
    </div>
  )
}

export default ChefsListGrid;
